import { AnimatePresence, motion } from "motion/react";
import styles from "./styles.module.css";
import { useForm } from "react-hook-form";

type RegisterForm = {
  name: string;
  password: string;
};

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const onSubmit = (data: RegisterForm) => console.log(data);

  console.log(errors);

  return (
    <div id="centered-content">
      <h1 className={styles.title}>Create an account</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputContainer}>
          <input
            {...register("name", {
              required: { value: true, message: "Required" },
              minLength: { value: 3, message: "Too short" },
              maxLength: { value: 20, message: "Too long" },
            })}
            type="text"
            placeholder="Name"
            autoComplete="none"
            maxLength={20}
            className={`${styles.input} ${errors.name && styles.error}`}
          />
          <AnimatePresence>
            {errors.name && (
              <motion.span
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ type: "spring", duration: 0.2 }}
                className={styles.errorMessage}
              >
                {errors.name.message}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <div className={styles.inputContainer}>
          <input
            {...register("password", {
              required: { value: true, message: "Required" },
              minLength: { value: 8, message: "Too short" },
            })}
            type="password"
            placeholder="Password"
            className={`${styles.input} ${errors.password && styles.error}`}
          />
          <AnimatePresence>
            {errors.password && (
              <motion.span
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ type: "spring", duration: 0.2 }}
                className={styles.errorMessage}
              >
                {errors.password.message}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <button className={styles.button}>Continue</button>
      </form>
      <div>
        <p>
          Already have an account?
          <a href="#" className={styles.link}>
            Log in
          </a>
        </p>
      </div>
      <span className={styles.disclaimer}>
        An admin must approve your request before you can start using Aceweb.
      </span>
    </div>
  );
}

export default Register;
