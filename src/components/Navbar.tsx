import { Link } from "react-scroll";
import { buttonAnimation } from "../styles/global.styles";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import CVForm from "../assets/Aung-Chan-Myae-Thaw-CV.pdf";

export interface NavbarProps {
  setMobileNavStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ setMobileNavStatus }: NavbarProps) {
  return (
    <header className="container sticky top-0 z-40 flex items-center justify-between px-4 py-6 mx-auto bg-opacity-75 md:px-8 lg:px-12 bg-primary">
      <motion.div
        whileHover={buttonAnimation}
        className="flex items-center justify-center md:w-14 md:h-14 w-12 h-12  text-2xl font-bold bg-transparent border-[4px] rounded-lg cursor-pointer border-secondary font-bebas "
      >
        <Link
          to="hero"
          smooth={true}
          spy={true}
          duration={500}
          offset={-110}
          className="flex items-center justify-center w-full h-full text-light"
        >
          C
        </Link>
      </motion.div>

      <nav className="items-center hidden gap-8 md:flex">
        <ul className="flex items-center gap-4 font-paragraph">
          <Link
            to="about"
            className="font-medium cursor-pointer text-light hover:text-secondary"
            smooth={true}
            spy={true}
            duration={500}
          >
            About me
          </Link>
          <Link
            to="projects"
            smooth={true}
            spy={true}
            duration={500}
            className="font-medium cursor-pointer text-light hover:text-secondary"
          >
            Projects
          </Link>
          <Link to="" className="font-medium text-light">
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
      </nav>
      <motion.button
        className="block text-2xl text-light md:hidden"
        whileTap={{ color: "#4979EE" }}
        onClick={() => setMobileNavStatus(true)}
      >
        <FaBars />
      </motion.button>
    </header>
  );
}

export const DownloadLink = styled(motion.a)`
  display: block;
  width: max-content;
  padding: 0.5em 1.25em;
  color: #fff;
  font-weight: 600;
  border-radius: 6px;
  border: 2px solid #4979ee;
  font-family: "Open Sans", "sans-serif";
`;
