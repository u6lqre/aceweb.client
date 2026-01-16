import { motion, useInView } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  id: number;
  href: string;
  title: string | undefined;
  content: ReactNode;
  setInViewSection: (id: number) => void;
};

function Section({ id, href, title, content, setInViewSection }: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, { amount: 1 });

  useEffect(() => {
    isInView && setInViewSection(id);
  }, [isInView]);

  return (
    <motion.section ref={sectionRef} className="flex flex-col gap-2">
      <h1 id={href} className="scroll-mt-2 text-black font-medium">
        {title}
      </h1>
      <div className="flex flex-col gap-3">{content}</div>
    </motion.section>
  );
}

export default Section;
