import type { ReactNode } from "react";

type Props = {
  title: string | undefined;
  content: ReactNode;
};

function Section({ title, content }: Props) {
  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-lg text-black">{title}</h1>
      {content}
    </section>
  );
}

export default Section;
