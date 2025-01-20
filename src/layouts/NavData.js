import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { AiTwotoneHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { SiWikibooks } from "react-icons/si";
import { BsTelephoneInbound } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa6";

export const socialLinks = [
  {
    id: 1,
    icon: FaWhatsapp,
    link: "https://wa.me/09063801889",
  },
  {
    id: 2,
    icon: FaGithub,
    link: "https://github.com/Ahmadogo",
  },
  {
    id: 3,
    icon: FaTwitter,
    link: "https://x.com/ahmadogo11",
  },
  {
    id: 4,
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/ahmadabdulkareem",
  },
  {
    id: 5,
    icon: CiMail,
    link: "abdulkareemahmad413@gmail.com",
  },
];

export const navLinks = [
  {
    id: 1,
    icon: AiTwotoneHome,
    name: "Home",
    path: "home"
  },
  {
    id: 2,
    icon: FaUser,
    name: "About ",
    path: "about-me"
  },

  {
    id: 3,
    icon: FaToolbox,
    name: "Skills ",
    path: "my-skills"
  },

  {
    id: 4,
    icon: SiWikibooks,
    name: "Projects",
    path: "my-projects"
  },
  {
    id: 5,
    icon: BsTelephoneInbound,
    name: "Contact",
    path: "contact-me"
  },
]
