import React from "react";
import WorkContent from "../Components/WorkContent";
import Layout from "../Layout/Layout";
import rwpintar from "../assets/img/rwpintar.png";
import doctoron from "../assets/img/doctoron.png";
import uxin from "../assets/img/uxin.png";
import artsneakers from "../assets/img/artsneakers.png";
import nomads from "../assets/img/nomads.png";
import fgd from "../assets/img/fgd.png";
import myquranku from "../assets/img/myquranku.png";
import { Link } from "react-router-dom";

const Work = ({ page }) => {
  const filterProjects = [
    {
      title: "UX.in",
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
      title: "Art Sneakers",
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
      title: "RW PINTAR",
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
      title: "Forum Group Discussion",
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
  ];

  const allProjects = [
    {
      title: "RW PINTAR",
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
      title: "MyQuranku",
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

  return (
    <>
      {page ? (
        <Layout>
          <section className="work-section my-8 lg:my-24">
            <div
              className="text-orange text-center underline text-xl  lg:text-3xl lg:mb-4"
              style={{ fontFamily: "Rodetta" }}
            >
              All Projects
            </div>
            {allProjects.map((item, itemIdx) => {
              return <WorkContent data={item} imgPos={`${itemIdx}`} />;
            })}
          </section>
        </Layout>
      ) : (
        <section className="work-section my-8 lg:my-24">
          {filterProjects.map((item, itemIdx) => {
            return (
              <WorkContent key={itemIdx} data={item} imgPos={`${itemIdx}`} />
            );
          })}
          <Link to="/projects">
            {" "}
            <div className="see-more w-8/12 lg:w-5/12 mx-auto my-4 lg:my-16 text-center lg:py-2 lg:text-xl text-orange border border-orange rounded-lg hover:bg-orange hover:text-dark-blue hover:underline hover:border-none transition ease-in-out">
              See More
            </div>
          </Link>
        </section>
      )}
    </>
  );
};

export default Work;
