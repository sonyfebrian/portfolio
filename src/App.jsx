import { BrowserRouter } from "react-router-dom";
import styles from "./style";
import { Navbar, Hero, StarsCanvas } from "./components";
import { Experience, Tech, Work, Contact } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          {/* <Hero /> */}
          <div className={` ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div>
        </div>
        {/* <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div> */}
        {/* <About /> */}
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
