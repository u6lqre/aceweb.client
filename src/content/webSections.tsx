import type { ReactNode } from "react";
import AboutAceweb from "./sections/AboutAceweb";
import HowItWorks from "./sections/HowItWorks";
import TermsOfUse from "./sections/TermsOfUse";
import VideoPlayer from "./sections/VideoPlayer";

type Section = {
  id: number;
  href: string;
  title?: string;
  content: ReactNode;
};

export const webSections: Section[] = [
  {
    id: 0,
    href: "about",
    content: <AboutAceweb />,
  },
  {
    id: 1,
    href: "howItWorks?",
    title: "How it works?",
    content: <HowItWorks />,
  },
  {
    id: 2,
    href: "videoPlayer",
    title: "<VideoPlayer />",
    content: <VideoPlayer />,
  },
  {
    id: 3,
    href: "terms",
    title: "Terms of use",
    content: <TermsOfUse />,
  },
];
