"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signinSchema, signupSchema } from "../../types/type";
import { signIn } from "next-auth/react";
import axios from "axios";

type SignInType = z.infer<typeof signinSchema>;
type SignUpType = z.infer<typeof signupSchema>;

export default function AuthPage({
  isSignin,
}: {
  isSignin: boolean;
}): React.JSX.Element {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
    reset,
  } = useForm<SignInType | SignUpType>({
    resolver: zodResolver(isSignin ? signinSchema : signupSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: SignInType | SignUpType) => {
    try {
      if (isSignin) {
        const response = await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
          callbackUrl: "/dashboard",
        });

        if (response?.error) {
          console.log("response.error", response.error);
          return;
        }
        router.push("/dashboard");
        router.refresh();
      } else {
        const response = await axios.post("/api/auth/signup", {
          data,
        });
        if (response.status === 201) {
          router.push("/auth/signin");
        }
      }

      router.push("/dashboard");
      router.refresh();
      reset();
    } catch (error: unknown) {
      console.error("Authentication error:", error);
      reset();
    }
  };

  const handleOAuthSignIn = async (provider: "google" | "github") => {
    try {
      await signIn(provider, {
        callbackUrl: "/dashboard",
        redirect: true,
      });
    } catch (error) {
      console.error(`${provider} sign-in error:`, error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 w-screen h-screen flex items-center justify-center grid-pattern">
      <div className="p-9 m-2 bg-gradient-to-br from-neutral-950 to-neutral-900 border border-supernova-500/45 rounded-2xl w-full max-w-md">
        <div className="flex flex-col items-start">
          <Link href={"/"}>
            <h1 className="text-3xl font-semibold bg-gradient-to-r from-supernova-100 to-supernova-500 text-transparent bg-clip-text cursor-pointer">
              WriteX
            </h1>
          </Link>
          <h3 className="text-2xl font-semibold text-supernova-200">
            Welcome!
          </h3>
          <p className="text-gray-400 text-center text-sm mb-6">
            Start writing Amazing Content!
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {!isSignin && (
            <Input
              {...register("username")}
              placeholder="Username"
              type="text"
              name="username"
              id="username"
            />
          )}
          <Input
            {...register("email")}
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            className={errors.email ? "border-red-500" : ""}
          />
          <div className="relative">
            <Input
              {...register("password")}
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              className={errors.password ? "border-red-500" : ""}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-supernova-300" />
              ) : (
                <Eye className="h-4 w-4 text-supernova-300" />
              )}
            </Button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button
            disabled={!isValid || isSubmitting}
            className="w-full text-supernova-950 hover:text-supernova-500"
          >
            {isSubmitting && (
              <span className="spinner-border spinner-border-sm mr-1 text-supernova-950"></span>
            )}
            {isSignin ? "Sign In" : "Sign Up"}
          </Button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-neutral-900 px-2 text-gray-500">
                or Continue with
              </span>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => handleOAuthSignIn("google")}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Sign in with Google
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => handleOAuthSignIn("github")}
            >
              <svg className="h-5 w-5" fill="white" viewBox="0 0 24 24">
                <path
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                  fillRule="evenodd"
                />
              </svg>
              Sign in with GitHub
            </Button>
          </div>

          <p className="text-gray-400 text-center">
            Don&apos;t have an account?{" "}
            {isSignin ? (
              <Link
                href="/auth/signup"
                className="text-supernova-300 hover:text-supernova-600 transition-colors"
              >
                Sign up
              </Link>
            ) : (
              <Link
                href="/auth/signin"
                className="text-supernova-300 hover:text-supernova-600 transition-colors"
              >
                Sign in
              </Link>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}
