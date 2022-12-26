import "./App.scss";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Work from "./Pages/Work";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Work page={true} />} />
          <Route path="/about" element={<About page={true} />} />{" "}
          <Route path="/contact" element={<Contact page={true} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
