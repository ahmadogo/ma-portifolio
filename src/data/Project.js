import { RiGitRepositoryFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import bankDash from "../assets/images/bankdash.png";
import kuda from "../assets/images/kuda.png";
import sms from "../assets/images/sms.png";
import underwriters from "../assets/images/underwriters.png";

export const myProjects = [
  {
    id: 1,
    img: bankDash,
    title: "Bank Dash",
    description:
      "A Personal Finance management app, it's a platform where a user can link mulple bank accounts and track his expenses, make transactions and plan investments ",
    repoLink: "https://github.com/Ahmadogo/bank-dash.git",
    hostedLink: "https://bankdashapp.vercel.app/",
    hosted: FaEye,
    repo: RiGitRepositoryFill,
    tags: [
      {
        name: "react.js",
      },
      {
        name: "tailwind",
      },
    ],
  },

  {
    id: 2,
    img: sms,
    title: "SMS",
    description:
      "Colaborated with a team to create A school management system, it's a platform where a proprietor/ owners of schools can register their school and manage the activities of stdeunts and also teachers",
    repoLink: "https://github.com/yusuftomilola/School-Management-System.git",
    hostedLink: "https://school-management-system-three-alpha.vercel.app/",
    hosted: FaEye,
    repo: RiGitRepositoryFill,
    tags: [
      {
        name: "react.js",
      },
      {
        name: "tailwind",
      },
      {
        name: "daisyUi",
      },
    ],
  },
  {
    id: 3,
    img: kuda,
    title: "KUDA replica",
    description:
      "A replication of Kuda bank money app.. done that  for fun and to sharpens my skills",
    repoLink: "https://github.com/Ahmadogo/KUDA.git",
    hostedLink: "https://kuda-five.vercel.app/",
    hosted: FaEye,
    repo: RiGitRepositoryFill,
    tags: [
      {
        name: "Html",
      },
      {
        name: "Css",
      },
      { name: "Js" },
    ],
  },
  {
    id: 4,
    img: underwriters,
    title: "Leadway Underwriters",
    description:
      "An inspaction website where companies supervise inspections done by their workers and also be able to assign  new task to them ",
    repoLink: "https://github.com/Ahmadogo/LEADWAY.git",
    hostedLink: "https://leadway-omega.vercel.app/inspectionList.html/",
    hosted: FaEye,
    repo: RiGitRepositoryFill,
    tags: [
      {
        name: "Html",
      },
      {
        name: "Css",
      },
      {
        name: "Js",
      },
    ],
  },
];
