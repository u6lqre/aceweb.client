import type { RegisterOptions } from "react-hook-form";

export type RegisterForm = {
  username: string;
  password: string;
};

export type InputConfig = {
  label: keyof RegisterForm;
  registerOptions: RegisterOptions<RegisterForm>;
  type: "text" | "password";
};
