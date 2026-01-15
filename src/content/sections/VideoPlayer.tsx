import { motion } from "motion/react";
import { useState } from "react";

function VideoPlayer() {
  const [fullscreen, setFullscreen] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-center items-center gap-2.5">
      <motion.img
        onClick={() => setFullscreen(!fullscreen)}
        whileHover={!fullscreen ? { scale: 1.02 } : ""}
        whileTap={{ scale: 0.98 }}
        animate={{ scale: fullscreen ? 1.5 : 1 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="w-55 rounded-xl border-4 border-white shadow-md cursor-pointer"
        src="https://media.tenor.com/OZNgEScYdxcAAAAM/theofficechristmas-theoffice.gif"
      />
      <span className="text-neutral-2">Not yet. 😛</span>
    </div>
  );
}

export default VideoPlayer;
