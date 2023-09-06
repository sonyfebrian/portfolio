
import { Navbar } from "./component"
import styles from "./style"
function App() {

  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          {/* <Hero /> */}
          <div className={` ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              tes
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
