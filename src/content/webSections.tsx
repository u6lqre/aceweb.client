import type { ReactNode } from "react";
import AboutAceweb from "./sections/AboutAceweb";
import HowItWorks from "./sections/HowItWorks";
import TermsOfUse from "./sections/TermsOfUse";
import VideoPlayer from "./sections/VideoPlayer";

type Section = {
  id: number;
  icon: string;
  href: string;
  title?: string;
  label: string;
  content: ReactNode;
};

export const webSections: Section[] = [
  {
    id: 0,
    icon: "layers",
    href: "about",
    label: "About",
    content: <AboutAceweb />,
  },
  {
    id: 1,
    icon: "grid",
    href: "howItWorks?",
    title: "How it works?",
    label: "How it works?",
    content: <HowItWorks />,
  },
  {
    id: 2,
    icon: "code",
    href: "videoPlayer",
    title: "<VideoPlayer />",
    label: "Live Demo",
    content: <VideoPlayer />,
  },
  {
    id: 3,
    icon: "terms",
    href: "terms",
    title: "Terms of use",
    label: "Terms of use",
    content: <TermsOfUse />,
  },
];
