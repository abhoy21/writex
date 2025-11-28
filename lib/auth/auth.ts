import NextAuth from "next-auth";
import { compare, hash } from "bcrypt";
import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { generatePassword } from "./generate-password";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../prisma";
import { AccountProvider } from "@/types/types";

export const config = {
  adapter: PrismaAdapter(prisma),
  debug: process.env.NODE_ENV !== "production",
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials): Promise<any> {
        try {
          if (!credentials?.email || !credentials.password) {
            throw new Error("Invalid credentials");
          }
          
          const email = credentials.email as string;
          const password = credentials.password as string;

          const existingUser = await prisma.user.findUnique({
            where: {
              email: email,
            },
          });
          
          if (!existingUser) {
            throw new Error("No user found with that email");
          }

          const validPassword = await compare(
            password,
            existingUser.password
          );

          if (!validPassword) {
            throw new Error("Incorrect password");
          }

          return {
            id: existingUser.id,
            email: existingUser.email,
            username: existingUser.username,
          };
        } catch (error) {
          if (error instanceof Error) {
            throw new Error(error.message);
          }
          throw new Error("Authentication failed");
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id!;
        token.username = user.username!;
      }
      return token;
    },

    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.userId as string;
        session.user.username = token.username as string;
      }
      return session;
    },

    async signIn({ user, account }) {
      try {
        if (account?.provider === "google") {
          if (!user.email) return false;

          const existingUser = await prisma.user.findUnique({
            where: {
              email: user.email,
            },
            include: {
              accounts: true,
            },
          });

          if (!existingUser) {
            const username = user.email.split("@")[0];

            const password = generatePassword({
              email: user.email,
              name: username,
            });

            const hashedPassword = await hash(password, 10);

            const newUser = await prisma.user.create({
              data: {
                email: user.email,
                username,
                password: hashedPassword,
              },
              select: {
                id: true,
                email: true,
                username: true,
              },
            });

            await prisma.account.create({
              data: {
                userId: newUser.id,
                type: account.type,
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                access_token: account.access_token,
                expires_at: account.expires_at,
                token_type: account.token_type,
                scope: account.scope,
                id_token: account.id_token,
              },
            });

            return true;
          }

          if (existingUser) {
            const existingProviderAccount = existingUser.accounts.find(
              (acc: AccountProvider) => acc.provider === account.provider
            );

            if (!existingProviderAccount) {
              await prisma.account.create({
                data: {
                  userId: existingUser.id,
                  type: account.type,
                  provider: account.provider,
                  providerAccountId: account.providerAccountId,
                  access_token: account.access_token,
                  expires_at: account.expires_at,
                  token_type: account.token_type,
                  scope: account.scope,
                  id_token: account.id_token,
                },
              });
            }
          }
        }
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET ?? "",
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);