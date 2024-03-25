import "./App.css";
import Navbar from "./Navbar";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Others from "./pages/Others";
import Test from "./pages/Test";

function App() {
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
        <div>
          <div className="pt-[160px] mb-[100px]">
            <Test />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
