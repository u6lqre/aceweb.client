import type { ReactNode } from "react";
import AboutAceweb from "./sections/AboutAceweb";
import HowItWorks from "./sections/HowItWorks";
import TermsOfUse from "./sections/TermsOfUse";
import VideoPlayer from "./sections/VideoPlayer";

type HomeSection = {
  title?: string;
  content: ReactNode;
};

export const homeSections: HomeSection[] = [
  {
    content: <AboutAceweb />,
  },
  {
    title: "How it works?",
    content: <HowItWorks />,
  },
  { title: "<VideoPlayer />", content: <VideoPlayer /> },
  {
    title: "Terms of use",
    content: <TermsOfUse />,
  },
];
