import Section from "./components/Section";
import Footer from "./components/Footer";
import { webSections } from "./content/webSections";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import Separator from "./ui/Separator";

export type LoadingState = "idle" | "loading" | "loaded" | "error";

function App() {
  const [inViewSections, setInViewSections] = useState<number[]>([
    webSections[0].id,
  ]);
  const [activeSection, setActiveSection] = useState<number>(webSections[0].id);

  useEffect(() => {
    const topSection = Math.min(...inViewSections);
    setActiveSection(topSection);
  }, [inViewSections]);

  return (
    <main className="max-w-[700px] mx-auto p-10 flex flex-col text-neutral-1">
      {webSections.map((s) => (
        <>
          <Section
            key={`section-${s.id}`}
            id={s.id}
            href={s.href}
            title={s.title}
            content={s.content}
            setInViewSections={setInViewSections}
          />
          <Separator key={`separator-${s.id}`} />
        </>
      ))}

      <Footer />

      <Nav activeSection={activeSection} setActiveSection={setActiveSection} />
    </main>
  );
}

export default App;
