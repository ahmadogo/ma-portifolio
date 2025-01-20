import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

export const tools = [
  {
    title: "HTML",
    icon: FaHtml5,
    proficiency: 100
  },
  {
    title: "CSS",
    icon: FaCss3Alt,
    proficiency: 85
  },
  {
    title: "GITHUB",
    icon: FaGithub,
    proficiency: 100
  },
];

export const frameWorks = [
  {
    title: "NEST",
    icon: SiNestjs,
    proficiency: 45
  },

  {
    title: "REACT",
    icon: FaReact,
    proficiency: 70
  },
  {
    title: "TAILWIND",
    icon: RiTailwindCssFill,
    proficiency: 85
  },
];

export const languages = [
  {
    title: "JAVASCRIPT",
    icon: IoLogoJavascript,
    proficiency: 80
  },
  {
    title: "TYPESCRIPT",
    icon: SiTypescript,
    proficiency: 65
  },
];
