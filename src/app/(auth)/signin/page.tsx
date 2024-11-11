"use client";

import ButtonLoader from "@/components/ButtonLoader";
import PassShowHide from "@/components/PassShowHide";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSignInUserMutation } from "@/store/apiSlice/authApi";
import { signInSchema, SignInSchemaType } from "@/zod-schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SignIn = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [signInUser, { isLoading: isSignInLoading }] = useSignInUserMutation();
  const router = useRouter();

  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleSubmit(values: SignInSchemaType) {
    try {
      const response = await signInUser(values).unwrap();
      toast.success(response?.message);
      router.push("/");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  }

  return (
    <div className="w-full max-w-md z-20">
      <h1 className="text-4xl font-bold text-primary mb-8">Welcome Back</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Password"
                      {...field}
                      type={isShowing ? "text" : "password"}
                    />
                    <PassShowHide
                      onClick={() => setIsShowing((prev) => !prev)}
                      isShowing={isShowing}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full flex items-center justify-center"
          >
            {isSignInLoading ? <ButtonLoader /> : "Sign In"}
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignIn;
