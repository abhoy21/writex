"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema, signupSchema } from "@/types/types";
import * as z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

type SignInType = z.infer<typeof signinSchema>;
type SignUpType = z.infer<typeof signupSchema>;

export default function Auth() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Default to login
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting, touchedFields },
    reset,
  } = useForm<SignInType | SignUpType>({
    resolver: zodResolver(isLogin ? signinSchema : signupSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: SignInType | SignUpType) => {
    try {
      if (isLogin) {
        const response = await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
          callbackUrl: "/dashboard",
        });

        if (response?.error) {
          console.log("response.error", response.error);
          // You might want to set a form error here
          return;
        }
        router.push("/dashboard");
        router.refresh();
      } else {
        const response = await axios.post("/api/auth/sign-up", {
          data,
        });
        if (response.status === 201) {
          setIsLogin(true); // Switch to login after signup
          reset();
        }
      }
    } catch (error: unknown) {
      console.error("Authentication error:", error);
      reset();
    }
  };

  return (
    <div className="w-full max-w-md py-2 px-4 mx-auto">
      {/* Header Section */}
      <div className="flex flex-col items-start">
        <Link href="/" className="hidden sm:flex items-center">
          <span className="self-center text-3xl font-bold whitespace-nowrap">
            WriteX-AI
          </span>
        </Link>
        {/* <h3 className="text-xl font-semibold text-gray-700 mt-3">
          {isLogin ? "Welcome back!" : "Welcome!"}
        </h3> */}

        <p className="text-gray-400 text-sm mb-2 sm:mb-6">
          {isLogin
            ? "You're all set — monitor your websites, track outages, and stay informed in real time."
            : "Join WriteX-AI and keep your websites online with real-time uptime monitoring and instant alerts."}
        </p>
      </div>

      {/* Auth Form */}
      <form
        key={isLogin ? "login" : "register"}
        className="space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        {!isLogin && (
          <div className="space-y-2">
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-600 ml-2"
            >
              Username
            </label>
            <Input
              id="username"
              {...register("username")}
              placeholder="Enter your username"
              type="text"
              className={`px-4 py-6 rounded-xl shadow-sm ${
                "username" in errors &&
                errors.username &&
                "username" in touchedFields &&
                touchedFields.username
                  ? "border-red-500"
                  : ""
              }`}
            />
            {"username" in errors &&
              errors.username &&
              "username" in touchedFields &&
              touchedFields.username && (
                <p className="text-red-500 text-sm ml-2">
                  {errors.username.message}
                </p>
              )}
          </div>
        )}

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-600 ml-2"
          >
            Email
          </label>
          <Input
            id="email"
            {...register("email")}
            placeholder="you@example.com"
            type="email"
            className={`px-4 py-6 rounded-xl shadow-sm ${
              errors.email && touchedFields.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && touchedFields.email && (
            <p className="text-red-500 text-sm ml-2">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2 relative">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-600 ml-2"
          >
            Password
          </label>
          <Input
            id="password"
            {...register("password")}
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            className={`px-4 py-6 rounded-xl pr-10 shadow-sm ${
              errors.password && touchedFields.password ? "border-red-500" : ""
            }`}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-9 hover:bg-transparent px-2 py-1"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-neutral-500" />
            ) : (
              <Eye className="h-4 w-4 text-neutral-500" />
            )}
          </Button>
          {errors.password && touchedFields.password && (
            <p className="text-red-500 text-sm ml-2">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="px-2 sm:px-3 md:px-3.5 py-1 sm:py-1.5 bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center">
          <button
            disabled={!isValid || isSubmitting}
            className={`flex items-center justify-center text-[#37322F] text-xs md:text-[13px] font-medium leading-5 font-sans w-full
    ${
      !isValid || isSubmitting
        ? "cursor-not-allowed opacity-45"
        : "cursor-pointer"
    }`}
          >
            {isSubmitting && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
            {isLogin ? "Login" : "Register"}
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <div className="px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center">
          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="flex items-center justify-center text-[#37322F] text-sm md:text-[13px] font-medium leading-5 font-sans w-full cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              className="mr-2 h-4 w-4"
            >
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
              <path d="M1 1h22v22H1z" fill="none" />
            </svg>
            Google
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 text-neutral-600 dark:text-gray-400 text-center mt-4">
          {isLogin ? "New to WriteX-AI?" : "Already monitoring with us?"}
          <div
            role="button"
            onClick={() => {
              setIsLogin(!isLogin);
              reset(
                !isLogin
                  ? { email: "", password: "" }
                  : { username: "", email: "", password: "" }
              );
            }}
            className="text-orange-500 hover:text-orange-400 transition duration-300 ease-in-out cursor-pointer"
          >
            {isLogin ? " Register" : " Login"}
          </div>
        </div>
      </form>
    </div>
  );
}
