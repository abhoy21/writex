import { z } from "zod";

export const signupSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z
    .string()
    .min(8, "password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    ),
});

export const signinSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    ),
});

export interface Template {
  name: string;
  desc: string;
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
