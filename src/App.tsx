
import { Navbar, Hero, Bot } from "./component"
import { Wrappper, WrappperWork, ExperienceWrapper } from "./pages"

import styles from "./style"
function App() {

  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />

          <div className={` ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div>

        </div>
        <Bot />
        <div className="relative z-0 hidden sm:block md:block ">
          <Wrappper />
        </div>
        <WrappperWork />
        <ExperienceWrapper />

      </div>

    </>
  )
}

export default App
