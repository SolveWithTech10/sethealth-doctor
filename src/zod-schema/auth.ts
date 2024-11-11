import { regExpressions } from "@/constants";
import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, { message: "Name is required" })
      .regex(regExpressions.stringOnly,"Name should only contains letters"),
    email: z
      .string()
      .trim()
      .email({ message: "Invalid email address" })
      .min(1, { message: "Email is required" }),
    password: z
      .string()
      .trim()
      .min(1, { message: "Password is required" })
      .regex(
        regExpressions.password,
        "*Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@, $, !, %, , ?, &), and be at least 5 characters long"
      ),
    confirmPassword: z
      .string()
      .trim()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Password didnot match!",
    path: ["confirmPassword"],
  });


  export const signInSchema = z
  .object({
    email: z
      .string()
      .trim()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: z
      .string()
      .trim()
      .min(1, { message: "Password is required" }),
  })

  export type SignUpSchemaType = z.infer<typeof signUpSchema>
  export type SignInSchemaType = z.infer<typeof signInSchema>
