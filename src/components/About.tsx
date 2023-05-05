import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { BsPerson, BsCodeSlash, BsBriefcase } from "react-icons/bs";

const beforeVariants = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 4,
    y: 4,
  },
};

const imageVariants = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: -4,
    y: -4,
  },
};
const afterVariants = {
  initial: {
    opacity: 0.5,
    x: 0,
    y: 0,
  },
  animate: {
    opacity: 0,
    x: -4,
    y: -4,
  },
};

export default function About() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <section
      className="container lg:max-w-4xl  xl:max-w-full  px-4  mx-auto md:px-8 xl:px-[8rem] py-[4rem] mt-4 overflow-x-hidden"
      id="about"
    >
      <motion.div
        className="flex items-center gap-2 mb-16"
        initial={{ x: "200", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-semibold md:text-2xl whitespace-nowrap lg:text-3xl font-heading text-secondary">
          About me
        </h2>
        <div className="w-[20rem] mt-2 h-[1px] bg-secondary bg-opacity-50" />
      </motion.div>
      <div className="flex flex-col-reverse items-center justify-between mx-auto lg:max-w-4xl xl:max-w-6xl lg:flex-row font-paragraph">
        <ul className="lg:basis-1/2 basis-full">
          {/* about */}
          <motion.article
            className="mb-10 text-paragraph text-light"
            initial={{ opacity: 0, x: "-50" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-2 mb-5 text-lg md:text-xl font-heading ">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-opacity-90 bg-secondary">
                <BsPerson size="16" />
              </div>
              About me
            </h3>
            <ul className="flex flex-col gap-2 ">
              <li className="flex items-start gap-2 text-sm md:items-center md:text-base">
                <div
                  className="w-2 h-2 mt-[0.5rem] md:mt-0 bg-secondary shrink-0"
                  style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                />{" "}
                Name: Aung Chan Myae Thaw
              </li>
              <li className="flex items-start gap-2 text-sm md:items-center md:text-base">
                <div
                  className="w-2 h-2 mt-[0.5rem] md:mt-0 bg-secondary shrink-0"
                  style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                />{" "}
                Location: Yangon
              </li>
              <li className="flex items-start gap-2 text-sm md:items-center md:text-base">
                {" "}
                <div
                  className="w-2 h-2 mt-[0.5rem] md:mt-0 bg-secondary shrink-0"
                  style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                />{" "}
                Background: Completed a web development OJT program from
                CreaThit
              </li>
              <li className="flex items-start gap-2 text-sm md:items-center md:text-base">
                {" "}
                <div
                  className="w-2 h-2 mt-[0.5rem] md:mt-0 bg-secondary shrink-0"
                  style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                />{" "}
                Passion: Fascinated by the power of technology to solve problems
                and improve lives
              </li>
              <li className="flex items-start gap-2 text-sm md:items-center md:text-base">
                {" "}
                <div
                  className="w-2 h-2 mt-[0.5rem] md:mt-0 bg-secondary shrink-0"
                  style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                />{" "}
                Goal: Eager to take first steps into the web development
                industry
              </li>
            </ul>
          </motion.article>
          {/* skills */}
          <motion.article
            className="mb-10 text-paragraph text-light"
            initial={{ opacity: 0, x: "-50" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-2 mb-5 text-lg md:text-xl font-heading ">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-opacity-90 bg-secondary">
                <BsCodeSlash size="16" />
              </div>
              Tech
            </h3>
            <ul className="flex flex-col gap-2 ">
              <li className="flex items-start gap-2 text-sm md:items-center md:text-base ">
                {" "}
                <div
                  className="w-2 h-2 mt-[0.5rem] md:mt-0 bg-secondary shrink-0"
                  style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                />{" "}
                Front-end: HTML, CSS, JavaScript
              </li>
              <li className="flex items-start gap-2 text-sm md:items-center md:text-base ">
                {" "}
                <div
                  className="w-2 h-2 mt-[0.5rem] md:mt-0 bg-secondary shrink-0"
                  style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                />{" "}
                Front-end Frameworks: React.js, Next.js
              </li>
              <li className="flex items-start gap-2 text-sm md:items-center md:text-base ">
                {" "}
                <div
                  className="w-2 h-2 mt-[0.5rem] md:mt-0 bg-secondary shrink-0"
                  style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                />{" "}
                CSS Frameworks: Tailwind CSS, Bootstrap
              </li>
              <li className="flex items-start gap-2 text-sm md:items-center md:text-base ">
                {" "}
                <div
                  className="w-2 h-2 mt-[0.5rem] md:mt-0 bg-secondary shrink-0"
                  style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                />{" "}
                Back-end: Express.js
              </li>
              <li className="flex items-start gap-2 text-sm md:items-center md:text-base ">
                {" "}
                <div
                  className="w-2 h-2 mt-[0.5rem] md:mt-0 bg-secondary shrink-0"
                  style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                />{" "}
                ORM: Prisma
              </li>
              <li className="flex items-start gap-2 text-sm md:items-center md:text-base ">
                {" "}
                <div
                  className="w-2 h-2 mt-[0.5rem] md:mt-0 bg-secondary shrink-0"
                  style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                />{" "}
                CMS: Strapi
              </li>
              <li className="flex items-start gap-2 text-sm md:items-center md:text-base ">
                {" "}
                <div
                  className="w-2 h-2 mt-[0.5rem] md:mt-0 bg-secondary shrink-0"
                  style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                />{" "}
                Version Control: Git
              </li>
              <li className="flex items-start gap-2 text-sm md:items-center md:text-base ">
                {" "}
                <div
                  className="w-2 h-2 mt-[0.5rem] md:mt-0 bg-secondary shrink-0"
                  style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                />{" "}
                Additional: Familiar with TypeScript and SCSS
              </li>
            </ul>
          </motion.article>
          {/* exprience */}
          <motion.article
            className="text-paragraph text-light"
            initial={{ opacity: 0, x: "-50" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-2 mb-5 text-lg md:text-xl font-heading ">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-seconday bg-secondary">
                <BsBriefcase size="16" />
              </div>
              Experience
            </h3>
            <ul className="flex flex-col gap-2 ">
              <li>
                <h4 className="flex items-start gap-2 mb-2 text-base md:items-center md:text-lg">
                  <div
                    className="w-2 h-2 mt-[0.5rem] md:mt-0 bg-secondary shrink-0"
                    style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                  />
                  Worked on a group project during OJT program
                </h4>
                <ul className="pl-6 list-disc">
                  <li className="mb-2 text-sm leading-7">
                    Built a web application for a local business that allowed
                    users to find Burmese translated books and articles, and
                    read them online with subscription plans.
                  </li>
                  <li className="mb-2 text-sm leading-7">
                    Gained valuable skills in
                    <span className="font-semibold text-secondary">
                      {" "}
                      collaboration
                    </span>
                    ,
                    <span className="font-semibold text-secondary">
                      {" "}
                      communication
                    </span>{" "}
                    and{" "}
                    <span className="font-semibold text-secondary">
                      problem-solving.
                    </span>{" "}
                  </li>
                  <li className="mb-2 text-sm leading-7">
                    Developed abilities to work effectively in a team and manage
                    time and resources efficiently.
                  </li>
                </ul>
              </li>
            </ul>
          </motion.article>
          {/* <motion.p
            initial={{ opacity: 0, x: "-50" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 text-sm !leading-7 md:text-base text-light"
          >
            Hi, I'm Aung Chan Myae Thaw, a web developer based in Yangon. I
            recently completed a web development OJT program from{" "}
            <span className="font-semibold text-secondary">CreaThit</span> and
            am eager to take my first steps into the industry. I've always been
            fascinated by the power of technology to solve problems and improve
            lives, and I'm excited to be part of a field that's constantly
            evolving and pushing boundaries.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: "-50" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 text-sm !leading-7 md:text-base text-light"
          >
            I have experience with{" "}
            <span className="font-semibold text-secondary">HTML</span>,{" "}
            <span className="font-semibold text-secondary">CSS</span>, and{" "}
            <span className="font-semibold text-secondary">JavaScript</span>,
            and have built several web applications using{" "}
            <span className="font-semibold text-secondary">React.js</span> and{" "}
            <span className="font-semibold text-secondary">Next.js</span> . I'm
            also familiar with various front-end frameworks such as{" "}
            <span className="font-semibold text-secondary">Tailwind CSS </span>
            and <span className="font-semibold text-secondary">
              Bootstrap
            </span>{" "}
            , and have experience working with back-end development using
            <span className="font-semibold text-secondary"> Express.js </span>
            and have experience with{" "}
            <span className="font-semibold text-secondary">
              ORM such as Prisma
            </span>{" "}
            .I have experience with version control using{" "}
            <span className="font-semibold text-secondary">Git</span> and also
            familar with{" "}
            <span className="font-semibold text-secondary">Typescript</span>.
          </motion.p>
          <motion.p
            className="mb-4 text-sm !leading-7 md:text-base text-light"
            initial={{ opacity: 0, x: "-50" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            During my OJT program, I had the opportunity to work on a group
            project with a team of developers. Our project was to build a web
            application for a local business that would allow users to find{" "}
            Burmese translated books, articles and can read online with
            subscription plans . Working on this project taught me valuable
            skills such as
            <span className="font-semibold text-secondary">
              {" "}
              collaboration{" "}
            </span>
            ,
            <span className="font-semibold text-secondary">
              {" "}
              communication{" "}
            </span>
            , and{" "}
            <span className="font-semibold text-secondary">
              problem-solving
            </span>
            . I learned how to work effectively in a team and how to manage my
            time and resources efficiently . This experience also gave me
            exposure to real-world development challenges and helped me build my
            technical skills in web development.
          </motion.p> */}
        </ul>
        <div className="relative flex justify-center mb-12 basis-full lg:basis-1/2 lg:mb-0">
          <ImageContainer
            className="max-w-[25rem] h-[25rem] relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, x: "50" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="before"
              variants={beforeVariants}
              animate={isHovered ? "animate" : "initial"}
            />
            <motion.div
              className="after"
              variants={afterVariants}
              animate={isHovered ? "animate" : "initial"}
            />
            <motion.img
              src="/me.jpg"
              alt="me"
              variants={imageVariants}
              animate={isHovered ? "animate" : "initial"}
              className="relative object-contain w-full h-full rounded-lg"
            />
          </ImageContainer>
        </div>
      </div>
    </section>
  );
}

export const ImageContainer = styled(motion.div)`
  .after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    background-color: #4979ee;
    top: 0;
    left: 0;
    border-radius: 8px;
    opacity: 0.5;
    z-index: 1;
  }

  .before {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    bottom: -5%;
    left: 5%;
    border: 4px solid #4979ee;
    border-radius: 8px;
  }
`;
