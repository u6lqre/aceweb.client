import type { FieldErrors, UseFormRegister } from "react-hook-form";
import styles from "./Input.module.css";
import type { InputConfig, RegisterForm } from "../../types";

type Props = InputConfig & {
  register: UseFormRegister<RegisterForm>;
  errors: FieldErrors<RegisterForm>;
};

function Input({ register, errors, label, registerOptions, type }: Props) {
  return (
    <input
      {...register(label, registerOptions)}
      type={type}
      placeholder={label}
      className={`${styles.input} ${errors[label] && styles.error}`}
    />
  );
}

export default Input;
