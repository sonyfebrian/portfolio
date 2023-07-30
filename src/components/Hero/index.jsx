// import robot from "../../assets/robot.png";
import { EarthCanvas } from "../../components";
import styles from "./styles";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Hero = () => {
  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    <>
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div
          className={`flex-1 mt-16 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              Hi, I&#39;m <span className="text-[#915EFF]">Sony</span>{" "}
              <br className="sm:block hidden" />{" "}
            </h1>
          </div>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            I&#39;m a skilled software developer with experience in TypeScript
            and JavaScript, and expertise in frameworks like React.js, Vue.js.
            I&#39;m a quick learner and collaborate closely with clients to
            create efficient, scalable, and user-friendly solutions that solve
            real-world problems. Let&#39;s work together to bring your ideas to
            life!
          </p>
          <p className="text-5xl mt-5 flex items-center gap-5">
            {" "}
            <a
              href="https://github.com/sonyfebrian"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub className="text-gray-600 hover:text-white cursor-pointer " />
            </a>
            <a
              href=" https://www.linkedin.com/in/sony-febrian-217064196"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoLinkedin className=" text-gray-600 hover:text-white cursor-pointer " />
            </a>
          </p>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          {/* <img
            src={robot}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
          /> */}
          <EarthCanvas />
        </div>
        {/* <EarthCanvas /> */}
      </section>
    </>
  );
};

export default Hero;
