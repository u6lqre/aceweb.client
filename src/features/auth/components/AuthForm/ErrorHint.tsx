import { AnimatePresence, motion } from "motion/react";
import type { FieldErrors } from "react-hook-form";
import styles from "./ErrorHint.module.css";
import type { RegisterForm } from "../../types";

type Props = { errors: FieldErrors<RegisterForm>; label: keyof RegisterForm };

function ErrorHint({ errors, label }: Props) {
  return (
    <AnimatePresence>
      {errors[label] && (
        <motion.span
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ type: "spring", duration: 0.2 }}
          className={styles.errorMessage}
        >
          {errors[label].message}
        </motion.span>
      )}
    </AnimatePresence>
  );
}

export default ErrorHint;
