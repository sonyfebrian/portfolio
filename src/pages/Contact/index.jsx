import { motion } from "framer-motion";
import { styles } from "./styles";
import { EarthCanvas } from "../../components";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { github } from "../../assets";

export const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Find me on:</p>

        <a
          className="inline-flex items-cente mt-2"
          target="_blank"
          href=" https://www.linkedin.com/in/sony-febrian-217064196"
        >
          {/* <img
            alt="blog"
            src="https://dummyimage.com/103x103"
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
          /> */}
          <svg
            className="w-6 h-6 text-blue-500 fill-current flex-shrink-0 object-cover object-center"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
          </svg>
          {/* <span className="flex-grow flex flex-col pl-4">
            <span className="text-secondary text-[14px] mt-1">
              https://www.linkedin.com/in/sony-febrian-217064196
            </span>
          </span> */}
        </a>
        <a
          className="inline-flex items-center "
          target="_blank"
          rel="noreferrer"
          href="https://github.com/sonyfebrian"
        >
          <img
            alt="blog"
            src={github}
            className="w-6 h-6 rounded-full flex-shrink-0 object-cover object-center"
          />

          {/* <span className="flex-grow flex flex-col pl-4">
            <span className="text-secondary text-[14px] mt-1">
              https://github.com/sonyfebrian
            </span>
          </span> */}
        </a>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

// export default SectionWrapper(Contact, "contact");
const ContactSectionWrapper = SectionWrapper(Contact, "contact");
export default ContactSectionWrapper;
