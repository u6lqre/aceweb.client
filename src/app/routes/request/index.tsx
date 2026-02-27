import { ChevronLeft, MailCheck } from "lucide-react";
import { motion } from "motion/react";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

function Request() {
  return (
    <div id="container">
      <NavLink to={"/onboarding"} className={styles.backLink}>
        <ChevronLeft />
      </NavLink>

      <div className={styles.content}>
        <motion.div
          className={styles.icon}
          initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.2 }}
        >
          <MailCheck />
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3 }}
        >
          <h1 className={styles.title}>You have requested access</h1>
          <h2 className={styles.subtitle}>
            Try again later to see if your request has been accepted.
          </h2>
        </motion.div>
      </div>
    </div>
  );
}

export default Request;
