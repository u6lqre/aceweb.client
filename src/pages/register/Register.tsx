import styles from "./styles.module.css";

type Props = {};

function Register({}: Props) {
  return (
    <div id="centered-content">
      <h1 className={styles.title}>Create an account</h1>

      <form action="#" className={styles.form}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          autoComplete="none"
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className={styles.input}
        />

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
