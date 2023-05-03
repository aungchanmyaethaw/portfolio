import { HiXMark } from "react-icons/hi2";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { DownloadLink, NavbarProps } from "./Navbar";
import { buttonAnimation } from "../styles/global.styles";
import CVForm from "../assets/Aung-Chan-Myae-Thaw-CV.pdf";

export default function MobileNavbar({ setMobileNavStatus }: NavbarProps) {
  return (
    <motion.aside
      className="fixed top-0 left-0 z-50 flex justify-end w-full h-screen bg-light bg-opacity-80 md:hidden"
      onClick={() => setMobileNavStatus(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-3/4 h-full px-8 py-10 bg-primary"
        onClick={(e) => e.stopPropagation()}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        <div className="flex justify-end mb-12">
          <button
            className="text-3xl text-secondary"
            onClick={() => setMobileNavStatus(false)}
          >
            <HiXMark />
          </button>
        </div>
        <ul className="flex flex-col gap-8 mb-8 font-paragraph">
          <Link
            to="about"
            className="text-lg font-medium cursor-pointer text-light"
            smooth={true}
            spy={true}
            duration={500}
            offset={-50}
            onClick={() => setMobileNavStatus(false)}
          >
            About me
          </Link>
          <Link
            to="projects"
            smooth={true}
            spy={true}
            duration={500}
            offset={-50}
            className="text-lg font-medium cursor-pointer text-light"
            onClick={() => setMobileNavStatus(false)}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            spy={true}
            duration={500}
            className="text-lg font-medium cursor-pointer text-light"
            onClick={() => setMobileNavStatus(false)}
          >
            Contact
          </Link>
        </ul>
        <DownloadLink
          href={CVForm}
          download="Aung-Chan-Myae-Thaw-CV"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={buttonAnimation}
        >
          CV Form
        </DownloadLink>
      </motion.div>
    </motion.aside>
  );
}
