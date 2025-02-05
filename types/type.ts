import { z } from "zod";

export const signupSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    ),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

export const signinSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

export interface Template {
  name: string;
  desc: string;
  category: string;
  icon: string;
  slug: string;
  aiPrompt: string;
  form: Form[];
}

interface Form {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

export const contentSchema = z.object({
  topic: z.string(),
  outline: z.string(),
  template: z.string(),
  category: z.string(),
  aiPrompt: z.string(),
});

export const paymentSchema = z.object({
  subscriptionId: z.string(),
  paymentId: z.string(),
});
