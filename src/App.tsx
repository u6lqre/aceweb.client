import Section from "./components/Section";
import Footer from "./components/Footer";
import { webSections } from "./content/webSections";
import Nav from "./components/Nav";
import { useState } from "react";
import Separator from "./ui/Separator";

export type LoadingState = "idle" | "loading" | "loaded" | "error";

function App() {
  const [inViewSection, setInViewSection] = useState<number>(webSections[0].id);

  return (
    <main className="w-[620px] flex flex-col text-neutral-1">
      {webSections.map((s) => (
        <>
          <Section
            key={`section-${s.id}`}
            id={s.id}
            href={s.href}
            title={s.title}
            content={s.content}
            setInViewSection={setInViewSection}
          />
          <Separator key={`separator-${s.id}`} />
        </>
      ))}

      <Footer />

      <Nav inViewSection={inViewSection} setInViewSection={setInViewSection} />
    </main>
  );
}

export default App;
