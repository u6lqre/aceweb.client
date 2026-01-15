import { motion } from "motion/react";

type Tab = {
  id: number;
  icon: string;
  label: string;
  href: string;
};

const tabs: Tab[] = [
  { id: 0, icon: "layers", label: "What is Aceweb?", href: "about" },
  { id: 1, icon: "grid", label: "How it works?", href: "howItWorks?" },
  { id: 2, icon: "code", label: "<VideoPlayer />", href: "videoPlayer" },
  { id: 3, icon: "terms", label: "Terms of use", href: "terms" },
];

type Props = {
  activeTab: number;
  setActiveTab: (id: number) => void;
};

function Nav({ activeTab, setActiveTab }: Props) {
  return (
    <nav className="fixed flex flex-col left-1/2 top-70 -translate-x-[600px]">
      {tabs.map((t) => (
        <a
          href={`#${t.href}`}
          key={t.id}
          onClick={() => setActiveTab(t.id)}
          className="w-[190px] h-9 cursor-pointer relative"
        >
          <motion.div
            whileTap={{ scale: 0.98 }}
            className="w-full h-full flex items-center gap-1.5"
          >
            <img className="ml-2.5" src={`/${t.icon}-icon.svg`} />
            <span className="text-black">{t.label}</span>
          </motion.div>

          {activeTab == t.id && (
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
