import { Info } from "lucide-react";
import { motion } from "motion/react";
import styles from "./ErrorMessage.module.css";

type Props = {
  value: string;
};

function ErrorMessage({ value }: Props) {
  return (
    <motion.div
      layout
      className={styles.errorMessage}
      initial={{ height: 0, opacity: 0, filter: "blur(4px)" }}
      animate={{ height: 17, opacity: 1, filter: "blur(0px)" }}
      exit={{ height: 0, opacity: 0, filter: "blur(4px)" }}
      transition={{ duration: 0.1 }}
    >
      <Info size={16} />
      <span>{value}</span>
    </motion.div>
  );
}

export default ErrorMessage;
