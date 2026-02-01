import rwpintar from "./assets/img/rwpintar.png";
import jaktrans from "./assets/img/jaktrans.png";
import doctoron from "./assets/img/doctoron.png";
import uxin from "./assets/img/uxin.png";
import artsneakers from "./assets/img/artsneakers.png";
import nomads from "./assets/img/nomads.png";
import fgd from "./assets/img/fgd.png";
import myquranku from "./assets/img/myquranku.png";
import bolekaka from "./assets/img/projects/Bolekaka/bolekaka.png";
import taslimlife from "./assets/img/logo_taslim_full.png";
import JakTrans from "./Pages/projects/JakTrans";
import RwPintar from "./Pages/projects/RwPintar";
import Uxin from "./Pages/projects/Uxin";
import Nomads from "./Pages/projects/Nomads";
import MyQuranKu from "./Pages/projects/MyQuranKu";
import DoctorOn from "./Pages/projects/DoctorOn";

import { faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import shots_catatanpintar_cover from "./assets/img/shots/catatanpintar/cover.png";
import shots_catatanpintar1 from "./assets/img/shots/catatanpintar/drb-1.png";
import shots_catatanpintar2 from "./assets/img/shots/catatanpintar/drb-2.png";
import shots_catatanpintar3 from "./assets/img/shots/catatanpintar/drb-3.png";
import shots_catatanpintar4 from "./assets/img/shots/catatanpintar/drb-4.png";

import shots_cimory1 from "./assets/img/shots/cimory/drb-01.png";
import shots_cimory2 from "./assets/img/shots/cimory/drb-02.png";
import shots_cimory3 from "./assets/img/shots/cimory/drb-03.png";
import shots_cimory4 from "./assets/img/shots/cimory/drb-04.png";

import shots_erlangga1 from "./assets/img/shots/erlangga/drb-01.png";
import shots_erlangga2 from "./assets/img/shots/erlangga/drb-02.png";
import shots_erlangga3 from "./assets/img/shots/erlangga/drb-03.png";

import shots_foodymeal1 from "./assets/img/shots/foodymeal/drb-01.png";
import shots_foodymeal2 from "./assets/img/shots/foodymeal/drb-02.png";
import shots_foodymeal3 from "./assets/img/shots/foodymeal/drb-03.png";
import shots_foodymeal4 from "./assets/img/shots/foodymeal/drb-04.png";

import shots_totalprime1 from "./assets/img/shots/totalprime/drb-01.png";
import shots_totalprime2 from "./assets/img/shots/totalprime/drb-02.png";
import shots_totalprime3 from "./assets/img/shots/totalprime/drb-03.png";
import shots_totalprime4 from "./assets/img/shots/totalprime/drb-04.png";

export const projects = [
  {
    title: "Taslim Life",
    root: "taslimlife",
    desc: "Your gateway to Islamic knowledge, anytime, anywhere. Taslim offers a seamless online learning experience with comprehensive features including Quran recitation, Hadith collections, and daily prayers. Empowering developers with open APIs for Quran, Hadith, and Dua integration.",
    img: taslimlife,
    tags: ["UI/UX", "Frontend", "Backend"],
    actions: [
      {
        title: "View Project",
        link: "https://taslim.life/",
      },
    ],
  },
  {
    title: "Bolekaka Binar",
    root: "bolekaka",
    desc: "Landing page for professional cleaning service company in Jabodetabek area. Built with Next.js and Tailwind CSS, featuring service packages, pricing plans, and WhatsApp integration for customer booking.",
    img: bolekaka,
    tags: ["UI/UX", "Frontend"],
    actions: [
      {
        title: "View Project",
        link: "https://bolekakabinar.com/",
      },
    ],
  },
  {
    title: "JakTrans",
    root: "jaktrans",
    page: JakTrans,
    desc: "Your all-in-one solution for Jakarta travel needs. Access routes, schedules, and transportation types effortlessly. Plan your journey with ease, all in one app. Discover comfort and convenience at your fingertips!",
    img: jaktrans,
    tags: ["UI/UX", "FE"],
    actions: [
      {
        title: "View Report",
        // link: "https://drive.google.com/file/d/12fCwuQwP1eeTGVyw_eFx1UNZXl96uNal/view?usp=sharing",
        link: "/project/jaktrans",
      },
    ],
  },
  {
    title: "RW PINTAR",
    root: "rwpintar",
    page: RwPintar,
    desc: "Database website for storing data and letters belonging to residents of Batu Ceper, Central Jakarta, not only that, this website also has several features including RW complaint services, discussion forums, and also blogs for traders there.",
    img: rwpintar,
    tags: ["UI/UX"],
    actions: [
      {
        title: "View Report",
        // link: "https://drive.google.com/file/d/12fCwuQwP1eeTGVyw_eFx1UNZXl96uNal/view?usp=sharing",
        link: "/project/rwpintar",
      },
    ],
  },
  {
    title: "Art Sneakers",
    root: "rwpintar",
    page: RwPintar,
    desc: "Creating an online store website starting from the initial concept, design, code, and backend. I take the frontend using the html css bootstrap and vue for effect",
    img: artsneakers,
    tags: ["Frontend"],
    actions: [
      {
        title: "View Project",
        link: "https://dragonfly378.github.io/ArtSneakers.id/pages/",
      },
    ],
  },
  {
    title: "Nomads",
    root: "nomads",
    page: Nomads,
    desc: "Website application for Travel, Tour, and Umrah.",
    img: nomads,
    tags: ["UI/UX"],
    actions: [
      {
        title: "View Report",
        link: "https://drive.google.com/file/d/1TrDVxkRYhAiDfc3CFFAlpS5yz_exiJ4n/view",
      },
    ],
  },
  {
    title: "Forum Group Discussion",
    root: "rwpintar",
    page: RwPintar,
    desc: "Forum group discussion project using the ReactJs library, redux, and Material UI",
    img: fgd,
    tags: ["Frontend"],
    actions: [
      {
        title: "View Project",
        link: "https://github.com/Capstone-15-Alta/front-end/tree/deployment",
      },
    ],
  },
  {
    title: "UX.in",
    root: "uxin",
    page: Uxin,
    desc: "How to make the best UX design course platform for prospective UX designers, starting from vision boards, mapping, wireframes to mockups.",
    img: uxin,
    tags: ["UI/UX"],
    actions: [
      {
        title: "View Report",
        link: "https://drive.google.com/file/d/1tMURho_PVd84QNtVs-YUjY4k0HddfgrZ/view?usp=sharing",
      },
    ],
  },
  {
    title: "MyQuranku",
    root: "myquranku",
    page: MyQuranKu,
    desc: "Alquran website using ReactJs and GraphQl for databases",
    img: myquranku,
    tags: ["Frontend"],
    actions: [
      {
        title: "View Project",
        link: "https://github.com/DragonFly378/MSIB-Alterra_Miniproject/tree/miniproject-1/quran-ku",
      },
    ],
  },
  {
    title: "DoctorOn",
    root: "doctoron",
    page: DoctorOn,
    desc: "Design Sprint for Health Concultation Mobile Apps, using Design Sprint Methods and Gestalt principals that makes user-friendly design and easy to understand",
    img: doctoron,
    tags: ["UI/UX"],
    actions: [
      {
        title: "View Report",
        link: "https://drive.google.com/file/d/1m6_ViMWR_57GxfNnLLa__YGAvVy0a-G0/view?usp=share_link",
      },
    ],
  },
];

export const sosmed = [
  {
    name: "instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/hafizhb28/",
  },
  {
    name: "github",
    icon: faGithub,
    link: "https://github.com/DragonFly378",
  },
  {
    name: "linkedin",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/muhammadhafizhisbullah/",
  },
  {
    name: "cv",
    icon: faFileLines,
    link: "https://drive.google.com/file/d/1LF3KFKCNEXIB6WVDFUObFZZ_KB2yct9V/view?usp=sharing",
  },
  {
    name: "email",
    icon: faEnvelope,
    link: "mailto:hafizhizbullah28@gmail.com",
  },
];

export const shots = [
  {
    id: 1,
    title: "Catatan Pintar",
    cover: shots_catatanpintar_cover,
    desc: "Introducing our education website design! Catatan Pintar is a website platform for those who want to be useful anytime and anywhere by sharing their study notes to help friends learn and achieve success with the notes they have.",
    images: [
      shots_catatanpintar1,
      shots_catatanpintar2,
      shots_catatanpintar3,
      shots_catatanpintar4,
    ],
  },
  {
    id: 2,
    title: "Cimory Diaryland",
    cover: shots_cimory1,
    desc: "Introducing our education website design! Catatan Pintar is a website platform for those who want to be useful anytime and anywhere by sharing their study notes to help friends learn and achieve success with the notes they have.",
    images: [shots_cimory1, shots_cimory2, shots_cimory3, shots_cimory4],
  },
  {
    id: 3,
    title: "Erlangga Learning App",
    cover: shots_erlangga1,
    desc: "Introducing our education website design! Catatan Pintar is a website platform for those who want to be useful anytime and anywhere by sharing their study notes to help friends learn and achieve success with the notes they have.",
    images: [shots_erlangga1, shots_erlangga2, shots_erlangga3],
  },
  {
    id: 4,
    title: "Foodymeal",
    cover: shots_foodymeal3,
    desc: "Introducing our education website design! Catatan Pintar is a website platform for those who want to be useful anytime and anywhere by sharing their study notes to help friends learn and achieve success with the notes they have.",
    images: [
      shots_foodymeal3,
      shots_foodymeal1,
      shots_foodymeal2,
      shots_foodymeal4,
    ],
  },
  {
    id: 5,
    title: "TOTAL PRIME ENGINEERING",
    cover: shots_totalprime1,
    desc: "Introducing our education website design! Catatan Pintar is a website platform for those who want to be useful anytime and anywhere by sharing their study notes to help friends learn and achieve success with the notes they have.",
    images: [
      shots_totalprime1,
      shots_totalprime2,
      shots_totalprime3,
      shots_totalprime4,
    ],
  },
];
