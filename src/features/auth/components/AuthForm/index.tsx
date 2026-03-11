import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import useCreateUser from "../../hooks/useCreateUser";
import type { InputConfig, RegisterForm } from "../../types";
import Button from "./Button";
import ErrorHint from "./ErrorHint";
import ErrorMessage from "./ErrorMessage";
import Input from "./Input";
import styles from "./index.module.css";

const inputs: InputConfig[] = [
  {
    label: "username",
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
    formState: { errors: schemaErrors },
  } = useForm<RegisterForm>();
  const { mutate, isPending, error, data: response } = useCreateUser();
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const navigate = useNavigate();
  const { addToken } = useAuth();

  const onSubmit = (data: RegisterForm) => {
    setIsTyping(false);
    mutate(data);
  };

  useEffect(() => {
    if (response) {
      const data = response.data;
      data.token && addToken(data.token);
      data.isAccepted ? navigate("/home") : navigate("/request");
    }
  }, [response]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {inputs.map((input) => (
        <div
          key={input.label}
          className={styles.inputContainer}
          onChange={() => setIsTyping(true)}
        >
          <Input
            register={register}
            errors={schemaErrors}
            label={input.label}
            registerOptions={input.registerOptions}
            type={input.type}
          />
          <ErrorHint errors={schemaErrors} label={input.label} />
        </div>
      ))}

      <AnimatePresence>
        {error && !isTyping ? <ErrorMessage value={error.message} /> : null}
      </AnimatePresence>

      <Button isPending={isPending} />
    </form>
  );
}

export default AuthForm;
