import styled from "styled-components";
import { Button, buttonAnimation } from "../styles/global.styles";
import { FaFolder } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -25 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.25, duration: 0.5 },
      }}
      viewport={{ once: true }}
      className="container  px-4  mx-auto md:px-8 xl:px-[8rem] py-[4rem] h-[90vh]"
      id="hero"
    >
      <HeroContainer className=" h-max py-[4rem] md:py-[7rem] px-8 md:px-[4rem] lg:max-w-4xl mx-auto xl:max-w-full   relative flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-[5rem] font-light text-light font-heading text-center mb-4 lg:mb-6 ">
          Welcome<span className="font-semibold text-secondary ">.</span>
        </h1>
        <p className="text-sm md:max-w-[640px] lg:max-w-[720px]  xl:max-w-[960px] w-full text-center md:text-base lg:text-lg mb-8   text-light font-paragraph leading-7">
          I'm Aung Chan Myae Thaw, a front-end developer who enjoys designing
          and building websites that are both{" "}
          <span className="font-semibold text-secondary">
            visually appealing
          </span>{" "}
          and
          <span className="font-semibold text-secondary"> user-friendly</span>.
          I believe that good design is just as important as good code, and I
          strive to deliver both in every project I work on.
        </p>
        <Button whileHover={buttonAnimation}>
          <Link
            to="projects"
            className="flex items-center py-1 gap-2 text-base md:!text-lg lg:!text-xl w-full h-full"
            smooth={true}
            spy={true}
            duration={500}
            offset={-50}
          >
            <FaFolder size={20} />
            Projects
          </Link>
        </Button>
      </HeroContainer>
    </motion.section>
  );
}

const HeroContainer = styled(motion.div)`
  &::before,
  &::after {
    content: "";
    width: 25%;
    height: 50%;
    display: block;
    position: absolute;
    border: 8px solid #4979ee;
  }

  &::before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
  }

  &::after {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
  }
`;
