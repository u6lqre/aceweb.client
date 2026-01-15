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
    }, 2000);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => copyToClipboard()}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="size-9 bg-neutral-4 flex items-center justify-center rounded-full cursor-pointer"
      >
        <img src="link-icon.svg" />
      </motion.button>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 5, x: -50 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-xs bg-neutral-4 text-neutral-2 rounded-[10px] py-2.5 absolute w-[140px] text-center shadow-xs"
          >
            Copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CopyToClipboardButton;
