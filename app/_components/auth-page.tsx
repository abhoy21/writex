"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signinSchema, signupSchema } from "../types/type";

type signInType = z.infer<typeof signinSchema>;
type signUpType = z.infer<typeof signupSchema>;

export default function AuthPage({
  isSignin,
}: {
  isSignin: boolean;
}): React.JSX.Element {
  const router = useRouter();
  const showPasswordRef = useRef(false);
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
    reset,
  } = useForm<signInType | signUpType>({
    resolver: zodResolver(isSignin ? signinSchema : signupSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: signInType | signUpType) => {
    try {
      const response = await axios.post(
        `${process.env.HTTP_BACKEND_URL}/api/v1/auth/${
          isSignin ? "signin" : "signup"
        }`,
        data,
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        router.push("/dashboard");
      }
      reset();
    } catch (error) {
      console.log(error);
      reset();
    }
  };

  const togglePasswordVisibility = () => {
    showPasswordRef.current = !showPasswordRef.current;
  };

  return (
    <div className='bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 w-screen h-screen flex items-center justify-center grid-pattern'>
      <div className='p-9 m-2 bg-gradient-to-br from-neutral-950 to-neutral-900 border border-malachite-500/45 rounded-2xl w-full max-w-md'>
        <div className='flex flex-col items-start'>
          <h1 className='text-3xl font-semibold bg-gradient-to-r from-malachite-300 to-malachite-700 text-transparent bg-clip-text'>
            WriteX
          </h1>
          <h3 className='text-2xl font-semibold text-malachite-200'>
            Welcome!
          </h3>
          <p className='text-gray-400 text-center text-sm mb-6'>
            Start writing Amazing Content!
          </p>
        </div>
        <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
          {!isSignin && (
            <Input
              {...register("username")}
              placeholder='Username'
              type='text'
              name='username'
              id='username'
            />
          )}
          <Input
            {...register("email")}
            placeholder='Email'
            type='email'
            name='email'
            id='email'
            className={errors.email ? "border-red-500" : ""}
          />
          <div className='relative'>
            <Input
              {...register("password")}
              placeholder='Password'
              type={showPasswordRef.current ? "text" : "password"}
              name='password'
              id='password'
              className={errors.password ? "border-red-500" : ""}
            />
            <Button
              type='button'
              variant='ghost'
              size='sm'
              className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
              onClick={() => togglePasswordVisibility()}
            >
              {showPasswordRef.current ? (
                <EyeOff className='h-4 w-4 text-malachite-300' />
              ) : (
                <Eye className='h-4 w-4 text-malachite-300' />
              )}
            </Button>
            {errors.password && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.password.message}
              </p>
            )}
          </div>

          <Button disabled={!isValid || isSubmitting} className='w-full'>
            {isSubmitting && (
              <span className='spinner-border spinner-border-sm mr-1'></span>
            )}
            {isSignin ? "Sign In" : "Sign Up"}
          </Button>

          <p className='text-gray-400'>
            Don&apos;t have an account?{" "}
            {isSignin ? (
              <Link
                href='/auth/signup'
                className='text-malachite-300 hover:text-malachite-600 transition-colors'
              >
                Sign up
              </Link>
            ) : (
              <Link
                href='/auth/signin'
                className='text-malachite-300 hover:text-malachite-600 transition-colors'
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
