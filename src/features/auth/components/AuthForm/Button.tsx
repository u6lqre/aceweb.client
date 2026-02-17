import { LoaderCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./Button.module.css";

type Props = {
  isPending: boolean;
};

function Button({ isPending }: Props) {
  return (
    <button className={styles.button}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          className={styles.span}
          key={`isPending-${isPending}`}
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 25, opacity: 0 }}
          transition={{ type: "spring", duration: 0.3, bounce: 0 }}
        >
          {isPending ? (
            <LoaderCircle size={16} className={styles.loader} />
          ) : (
            "Continue"
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export default Button;
