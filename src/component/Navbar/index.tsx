import { useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import { styles } from "./styles";
import { FcBriefcase, FcWorkflow } from "react-icons/fc";
import { navLinks, NavLink } from "@/constants";
import { logo, menu, close } from "@/assets";


const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${styles.paddingX
          } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
          }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-24 h-24 object-contain " />
            <p className="text-white text-[18px] font-bold cursor-pointer flex ">
              Sony &nbsp;
              <span className="sm:block hidden"> | Front End Developer</span>
            </p>
          </Link>

          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((nav: NavLink) => (
              <li
                key={nav.id}
                className={`${active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <a href="./src/assets/cv.pdf" download>
              <button className="btn-primary">Download CV</button>
            </a>
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${!toggle ? "hidden" : "flex"
                } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav: NavLink) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                      }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    {nav.title === "Technology" ? "" : (
                      <a href={`#${nav.id}`}>{nav.title}</a>

                    )}

                  </li>
                ))}
              </ul>
            </div>

          </div>


        </div>
      </nav>
      <nav className="flex md:hidden flex-row items-center justify-around px-8 h-18 black-gradient  z-20 fixed bottom-0 w-full rounded-t-3xl text-2xl">

        <div className="flex">

          {navLinks.map((nav: NavLink) => (
            <div className="flex-1 group" key={nav.id} onClick={() => {
              setToggle(!toggle);
              setActive(nav.title);
            }} >


              <a href={`#${nav.id}`} className="flex items-center justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500">
                <span className="block px-1">

                  {nav.title === "Work" ? (
                    <>
                      <FcBriefcase className=" pt-1 mb-1 block h-8 w-8 items-center flex justify-center" />
                      <span className="block font-bold text-white text-sm pb-1">{nav.title}</span>
                    </>
                  ) : nav.title === "Technology" ? null : (
                    nav.title === "Project" ? (
                      <>
                        <FcWorkflow className=" pt-1 mb-1 block h-8 w-8 items-center ml-2" />
                        <span className="block font-bold text-white text-sm pb-1">{nav.title}</span>
                      </>
                    ) : (
                      <span className="block text-white text-sm pb-1">{nav.title}</span>
                    )
                  )}
                </span>
              </a>

            </div>
          ))}

        </div>
      </nav>
    </>
  );
};

export default Navbar;