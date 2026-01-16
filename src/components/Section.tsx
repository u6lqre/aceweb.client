import { motion, useInView } from "motion/react";
import {
  useEffect,
  useRef,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type Props = {
  id: number;
  href: string;
  title: string | undefined;
  content: ReactNode;
  setInViewSections: Dispatch<SetStateAction<number[]>>;
};

function Section({ id, href, title, content, setInViewSections }: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, { amount: 0.7 });

  useEffect(() => {
    setInViewSections((prev) => {
      return isInView
        ? [...prev, id]
        : prev.filter((sectionId) => sectionId !== id);
    });
  }, [isInView]);

  return (
    <motion.section ref={sectionRef} className="flex flex-col gap-2">
      <h1 id={href} className="scroll-mt-5 text-black font-medium">
        {title}
      </h1>
      <div className="flex flex-col gap-3">{content}</div>
    </motion.section>
  );
}

export default Section;
