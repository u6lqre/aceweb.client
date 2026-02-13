import AuthForm from "@/features/auth/components/AuthForm";
import styles from "./styles.module.css";

function Register() {
  return (
    <div id="centered-content">
      <h1 className={styles.title}>Create an account</h1>

      <AuthForm />

      <p>
        Already have an account?
        <a href="#" className={styles.link}>
          Log in
        </a>
      </p>

      <span className={styles.disclaimer}>
        An admin must approve your request before you can start using Aceweb.
      </span>
    </div>
  );
}

export default Register;
