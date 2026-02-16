import { AnimatePresence, motion } from "motion/react";
import styles from "./Button.module.css";

type Props = {};

function Button({}: Props) {
  return (
    <button className={styles.button}>
      <AnimatePresence mode="popLayout">
        <motion.span>Continue</motion.span>
      </AnimatePresence>
    </button>
  );
}

export default Button;
