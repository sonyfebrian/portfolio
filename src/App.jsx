import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero, StarsCanvas } from "./components";
import { About, Experience, Tech, Work, Contact } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Work />
        <Experience />
        <Tech />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
