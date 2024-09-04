"use client";

import { LoginUserSchema } from "@/app/validation";
import ErrorMessage from "@/components/ErrorMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { signIn } from "next-auth/react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import type z from "zod";

type LoginForm = z.infer<typeof LoginUserSchema>;

const SigninForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  const locale = useLocale();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(LoginUserSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLogin(true);

      const result = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (result && result.error) {
        throw new Error(result.error);
      }

      reset();
      toast.success("Login successful");
      router.push(`/${locale}/admin`);
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Login failed");
    } finally {
      setIsLogin(false);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <TextInput
            id="email"
            type="email"
            className="my-2"
            required
            placeholder="Enter your email"
            {...register("email")}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <TextInput
            id="password"
            required
            className="my-2"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </div>
        <Button
          type="submit"
          disabled={isLogin}
          className="flex items-center gap-2"
        >
          {isLogin && <Spinner aria-label="info spinner example" />}
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default SigninForm;
