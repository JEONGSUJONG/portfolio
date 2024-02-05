import "./App.css";
import Navbar from "./layout/NavBar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <main>
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
