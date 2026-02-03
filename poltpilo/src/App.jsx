import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Work from "./components/Works";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        
        <div  className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
      <Work />
     <Feedback />
      </div>

      <div>
        <Contact/>
      </div>
        
    </BrowserRouter>
  );
};

export default App;
