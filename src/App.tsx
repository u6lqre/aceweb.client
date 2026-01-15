import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { homeSections } from "./content/homeSections";

export type LoadingState = "idle" | "loading" | "loaded" | "error";

function App() {
  return (
    <main className="w-[620px] flex flex-col gap-10 text-neutral-1">
      <div className="w-full h-[100px] fixed bg-linear-to-b from-white to-white/0 z-10" />
      <Header />
      {homeSections.map((s, i) => (
        <Section key={i} title={s.title} content={s.content} />
      ))}
      <Footer />
    </main>
  );
}

export default App;
