import "./App.scss";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Work from "./Pages/Work";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { projects } from "./datas";
import Shots from "./Pages/shots/Shots";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Work page={true} />} />
          <Route path="/shots" element={<Shots />} />
          <Route path="/about" element={<About page={true} />} />{" "}
          <Route path="/contact" element={<Contact page={true} />} />
          {projects.map((project, projectId) => {
            return (
              <Route
                id={projectId}
                path={`project/${project.root}`}
                element={<project.page page={true} />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
