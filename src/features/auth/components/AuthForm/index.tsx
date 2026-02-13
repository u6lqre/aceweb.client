import { useForm } from "react-hook-form";
import ErrorHint from "./ErrorHint";
import Input from "./Input";
import styles from "./index.module.css";
import type { InputConfig, RegisterForm } from "../../types";

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

  const onSubmit = (data: RegisterForm) => console.log(data);

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
      <button className={styles.button}>Continue</button>
    </form>
  );
}

export default AuthForm;
