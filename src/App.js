import "./App.scss";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Work from "./Pages/Work";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import RwPintar from "./Pages/projects/RwPintar";
import DoctorOn from "./Pages/projects/DoctorOn";
import Uxin from "./Pages/projects/Uxin";
import Nomads from "./Pages/projects/Nomads";
import AnterAngkut from "./Pages/projects/AnterAngkut";

const dataProjects = [
  {
    title: "rwpintar",
    page: RwPintar,
  },
  {
    title: "doctoron",
    page: DoctorOn,
  },
  {
    title: "anterangkut",
    page: AnterAngkut,
  },
  {
    title: "nomads",
    page: Nomads,
  },
  {
    title: "uxin",
    page: Uxin,
  },
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Work page={true} />} />
          <Route path="/about" element={<About page={true} />} />{" "}
          <Route path="/contact" element={<Contact page={true} />} />
          {dataProjects.map((project, projectId) => {
            return (
              <Route
                id={projectId}
                path={`project/${project.title}`}
                element={<project.page page={true} />}
              />
            );
          })}
          <Route path="/project/rw" element={<Contact page={true} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
