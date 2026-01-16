import { motion } from "motion/react";
import { webSections } from "@/content/webSections";

type Props = {
  activeSection: number;
  setActiveSection: (id: number) => void;
};

function Nav({ activeSection, setActiveSection }: Props) {
  return (
    <nav className="fixed flex flex-col top-22 right-10 text-sm gap-3">
      <span className="text-black">Table of contents</span>
      <div className="flex flex-col gap-2.5 pl-4 relative">
        <div className="absolute w-[3px] h-full bg-neutral-3 rounded-full left-0.5" />
        {webSections.map((section) => (
          <>
            <a
              href={`#${section.href}`}
              key={`nav-${section.id}`}
              onClick={() => setActiveSection(section.id)}
              className={`cursor-pointer relative duration-700 hover:text-neutral-1 ${
                activeSection === section.id ? "text-black" : "text-neutral-2"
              }`}
            >
              {section.label}

              {activeSection === section.id && (
                <motion.div
                  layoutId="bubble"
                  transition={{ type: "spring", duration: 0.7 }}
                  className="absolute w-[3px] h-5 bg-black rounded-full -left-3.5 top-0"
                />
              )}
            </a>
          </>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
