import Section from "./components/Section";
import Footer from "./components/Footer";
import { webSections } from "./content/webSections";
import Nav from "./components/Nav";
import { useState } from "react";

export type LoadingState = "idle" | "loading" | "loaded" | "error";

function App() {
  const [inViewSection, setInViewSection] = useState<number>(webSections[0].id);

  return (
    <main className="w-[620px] flex flex-col text-neutral-1 gap-5">
      <div className="w-full h-10 fixed bg-linear-to-b from-white to-white/0 z-10" />

      {webSections.map((s) => (
        <Section
          key={s.href}
          id={s.id}
          href={s.href}
          title={s.title}
          content={s.content}
          setInViewSection={setInViewSection}
        />
      ))}

      <Footer />

      <Nav inViewSection={inViewSection} setInViewSection={setInViewSection} />
    </main>
  );
}

export default App;
