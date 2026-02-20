import AuthForm from "@/features/auth/components/AuthForm";
import styles from "./styles.module.css";

function Onboarding() {
  return (
    <div id="container">
      <img src="/logo.svg" className={styles.logo} />
      <div>
        <h1 className={styles.title}>Welcome to Aceweb</h1>
        <h2 className={styles.subtitle}>Log in or sign up to get started.</h2>
      </div>

      <AuthForm />

      <span className={styles.disclaimer}>
        We’ll create an account if you don’t have one yet.
      </span>
    </div>
  );
}

export default Onboarding;
