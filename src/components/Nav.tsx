import { motion } from "motion/react";
import { webSections } from "@/content/webSections";

type Props = {
  activeSection: number;
  setActiveSection: (id: number) => void;
};

function Nav({ activeSection, setActiveSection }: Props) {
  return (
    <nav className="fixed flex flex-col left-1/2 top-70 -translate-x-[600px]">
      {webSections.map((section) => (
        <a
          href={`#${section.href}`}
          key={`nav-${section.id}`}
          onClick={() => setActiveSection(section.id)}
          className="w-[190px] h-9 cursor-pointer relative"
        >
          <motion.div
            whileTap={{ scale: 0.98 }}
            className="w-full h-full flex items-center gap-1.5"
          >
            <img className="ml-2.5" src={`/${section.icon}-icon.svg`} />
            <span className="text-black">{section.label}</span>
          </motion.div>

          {activeSection == section.id && (
            <motion.div
              layoutId="bubble"
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-neutral-4 w-full h-full absolute inset-0 -z-5 rounded-full"
            ></motion.div>
          )}
        </a>
      ))}
    </nav>
  );
}

export default Nav;
