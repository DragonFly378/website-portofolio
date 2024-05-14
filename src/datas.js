import rwpintar from "./assets/img/rwpintar.png";
import jaktrans from "./assets/img/jaktrans.png";
import doctoron from "./assets/img/doctoron.png";
import uxin from "./assets/img/uxin.png";
import artsneakers from "./assets/img/artsneakers.png";
import nomads from "./assets/img/nomads.png";
import fgd from "./assets/img/fgd.png";
import myquranku from "./assets/img/myquranku.png";
import JakTrans from "./Pages/projects/JakTrans";
import RwPintar from "./Pages/projects/RwPintar";
import Uxin from "./Pages/projects/Uxin";
import Nomads from "./Pages/projects/Nomads";
import Myquranku from "./Pages/projects/Myquranku";
import DoctorOn from "./Pages/projects/DoctorOn";

export const projects = [
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
    page: Myquranku,
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
