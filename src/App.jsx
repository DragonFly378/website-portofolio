import "./App.scss";
import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { projects } from "./datas";

// Lazy load pages for code splitting
const Home = lazy(() => import("./Pages/Home"));
const Work = lazy(() => import("./Pages/Work"));
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const Shots = lazy(() => import("./Pages/shots/Shots"));
const ShotsDetail = lazy(() => import("./Pages/shots/ShotsDetail"));
const Link = lazy(() => import("./Pages/Link"));
const Summary = lazy(() => import("./Pages/Summary"));
const Blog = lazy(() => import("./Pages/Blog"));
const BlogDetail = lazy(() => import("./Pages/BlogDetail"));
const Write = lazy(() => import("./Pages/Write"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-dark-blue">
    <div className="text-orange text-xl">Loading...</div>
  </div>
);

// Component to handle scroll restoration and route preloading
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/link" element={<Link />} />
          <Route path="/projects" element={<Work page={true} />} />
          <Route path="/shots" element={<Shots />} />
          <Route path="/shots/:id" element={<ShotsDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/write" element={<Write />} />
          <Route path="/about" element={<About page={true} />} />
          <Route path="/contact" element={<Contact page={true} />} />
          <Route path="/summary" element={<Summary />} />
          {projects.map((project, projectId) => (
            <Route
              key={projectId}
              path={`project/${project.root}`}
              element={<project.page page={true} />}
            />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
