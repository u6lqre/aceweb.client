import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function CopyToClipboardButton() {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    const text = window.location.href;
    navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => copyToClipboard()}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="size-9 bg-neutral-4 flex items-center justify-center rounded-full cursor-pointer"
      >
        <AnimatePresence mode="wait">
          {!copied ? (
            <motion.img
              key="link"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.1 }}
              src="link-icon.svg"
              className="size-5"
            />
          ) : (
            <motion.img
              key="check"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.1 }}
              src="check-icon.svg"
              className="size-5"
            />
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

export default CopyToClipboardButton;
