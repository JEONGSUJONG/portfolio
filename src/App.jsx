import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Others from "./pages/Others";
import DetailProject from "./pages/DetailProject";

function Layout() {
  return (
    <div>
      <Navbar />
      <main className="w-[85%] mx-auto mb-auto">
        <div id="AboutMe">
          <div className="pt-[160px]">
            <AboutMe />
          </div>
        </div>
        <div id="Skills">
          <div className="pt-[160px]">
            <Skills />
          </div>
        </div>
        <div id="Projects">
          <div className="pt-[160px]">
            <Projects />
          </div>
        </div>
        <div id="Education">
          <div className="pt-[160px]">
            <Education />
          </div>
        </div>
        <div id="Others">
          <div className="pt-[160px] mb-[100px]">
            <Others />
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/project/:id" element={<DetailProject />} />
      </Route>
    </Routes>
  );
}

export default App;
