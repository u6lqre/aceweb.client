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
    <motion.section ref={sectionRef} id={href} className="flex flex-col gap-3">
      <h1 className="mt-5 text-lg text-black">{title}</h1>
      {content}
    </motion.section>
  );
}

export default Section;
