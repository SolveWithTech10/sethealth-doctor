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
import { useSignUpUserMutation } from "@/store/apiSlice/authApi";
import { signUpSchema, SignUpSchemaType } from "@/zod-schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SignUp = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [signUpUser, {isLoading:isSignupLoading}] = useSignUpUserMutation();
  const router = useRouter();

  const queries = useSearchParams();
  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(()=>{
    form.setValue("email", queries.get("email") || "");
  },[queries])

  async function handleSubmit(values: SignUpSchemaType) {
    try{
      const response = await signUpUser(values).unwrap();
      toast.success(response.data.message);
      router.push("/");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(error:any){
      toast.error(error.data.message);
    }

  }

  return (
    <div className="w-full max-w-md z-20">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Welcome</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="User Name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} className="pointer-events-none"/>
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Confirm Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full flex items-center justify-center"
          >
            {isSignupLoading ? <ButtonLoader/>:"Sign Up"}
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </form>
      </Form>
      <p className="mt-6 text-center text-blue-800">
        Already have an account?{" "}
        <Link href="/signin" className="text-blue-600 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
