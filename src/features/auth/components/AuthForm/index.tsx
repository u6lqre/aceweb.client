import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import type { InputConfig, RegisterForm } from "../../types";
import Button from "./Button";
import ErrorHint from "./ErrorHint";
import Input from "./Input";
import styles from "./index.module.css";

const inputs: InputConfig[] = [
  {
    label: "name",
    registerOptions: {
      required: { value: true, message: "Required" },
      minLength: { value: 3, message: "Too short" },
      maxLength: { value: 20, message: "Too long" },
    },
    type: "text",
  },
  {
    label: "password",
    registerOptions: {
      required: { value: true, message: "Required" },
      minLength: { value: 8, message: "Too short" },
    },
    type: "password",
  },
];

function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const mutation = useMutation({
    mutationFn: async (post: RegisterForm) => {
      const url = "http://localhost:3000/register";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      if (!response.ok) {
        throw new Error("Register failed");
      }

      return response.json();
    },
  });

  const onSubmit = (data: RegisterForm) => mutation.mutate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {inputs.map((input) => (
        <div key={input.label} className={styles.inputContainer}>
          <Input
            register={register}
            errors={errors}
            label={input.label}
            registerOptions={input.registerOptions}
            type={input.type}
          />
          <ErrorHint errors={errors} label={input.label} />
        </div>
      ))}
      <Button isPending={mutation.isPending} />
    </form>
  );
}

export default AuthForm;
