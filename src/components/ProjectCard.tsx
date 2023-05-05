import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { ProjectProps } from "./Projects";
import { ImageContainer } from "./About";

interface ProjectCardProps extends ProjectProps {
  index: number;
}

const parentVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
  },
};

const afterVariants = {
  initial: {
    y: "100%",
  },
  animate: {
    y: 0,
  },
};

const leftVariants = {
  initial: {
    opacity: 0,
    x: "-200",
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const rightVariants = {
  initial: {
    opacity: 0,
    x: "200",
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

export default function ProjectCard({
  image,
  title,
  techs,
  git,
  content,
  deploy,
  index,
}: ProjectCardProps) {
  return (
    <>
      <motion.article
        className="relative z-10 block px-4 py-6 rounded-lg bg-opacity-20 md:hidden bg-secondary"
        variants={index % 2 === 0 ? rightVariants : leftVariants}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.75, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 mb-6 ">
          <a
            href={deploy}
            rel="noreferrer"
            target="_blank"
            className="text-lg font-semibold font-heading text-light "
          >
            {title}
          </a>
          <motion.a
            href={git}
            target="_blank"
            rel="noreferrer"
            className="text-xl text-light"
            initial={{ y: 0, color: "#F0EDFF" }}
            whileHover={{ y: "-4px", color: "#4979EE" }}
            whileTap={{ y: "-4px", color: "#4979EE" }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href={deploy}
            target="_blank"
            rel="noreferrer"
            className="text-xl text-light"
            initial={{ y: 0, color: "#F0EDFF" }}
            whileHover={{ y: "-4px", color: "#4979EE" }}
            whileTap={{ y: "-4px", color: "#4979EE" }}
          >
            <FiUpload />
          </motion.a>
        </div>
        <img src={image} alt={title} className="w-full mb-4 rounded-lg" />
        <p className="mb-6 text-sm leading-7 font-paragraph text-light">
          {content}
        </p>
        <ul className="flex flex-wrap items-center gap-2 font-medium text-light font-paragraph">
          {techs.map((tech) => (
            <li
              key={tech}
              className="text-xs text-gray-300 font-paragraph hitespace-nowrap"
            >
              {tech}
            </li>
          ))}
        </ul>
      </motion.article>

      {/* large */}

      <motion.article
        className={` hidden md:flex items-start   ${
          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        }`}
        variants={index % 2 === 0 ? rightVariants : leftVariants}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.75, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <motion.a
          href={deploy}
          rel="noreferrer"
          target="_blank"
          className="block overflow-hidden basis-1/2"
          variants={parentVariants}
          initial="initial"
          whileHover="animate"
        >
          <ImageContainer className="relative w-full h-full overflow-hidden rounded-lg basis-1/2">
            <motion.div
              className="flex items-center justify-center after"
              variants={afterVariants}
              transition={{ duration: 0.4 }}
            >
              <FiUpload className="text-3xl text-primary" />
            </motion.div>
            <div className="before !top-0 !left-0 z-10 " />

            <img
              src={image}
              alt={title}
              className="relative z-0 block object-cover w-full h-full p-1 rounded-lg"
            />
          </ImageContainer>
        </motion.a>

        <div
          className={`relative z-30 ${
            index % 2 === 0 ? "right-12" : "left-12"
          }  basis-1/2`}
        >
          <div
            className={`items-center gap-4 flex mb-4 ${
              index % 2 === 0 ? "justify-end" : "justify-start"
            }`}
          >
            <h3 className={`text-xl font-semibold font-heading text-light `}>
              {title}
            </h3>
            <motion.a
              href={git}
              target="_blank"
              rel="noreferrer"
              className="text-xl text-light"
              initial={{ y: 0, color: "#F0EDFF" }}
              whileHover={{ y: "-4px", color: "#4979EE" }}
              whileTap={{ y: "-4px", color: "#4979EE" }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href={deploy}
              target="_blank"
              rel="noreferrer"
              className="text-xl text-light"
              initial={{ y: 0, color: "#F0EDFF" }}
              whileHover={{ y: "-4px", color: "#4979EE" }}
              whileTap={{ y: "-4px", color: "#4979EE" }}
            >
              <FiUpload />
            </motion.a>
          </div>
          <div className="p-6 mb-2 rounded-lg bg-secondary bg-opacity-90 ">
            <p className="leading-7 font-paragraph text-light">{content}</p>
          </div>
          <ul
            className={` ${
              index % 2 == 0 ? "justify-end" : "justify-start"
            } flex items-center gap-4 font-medium text-light font-paragraph flex-wrap`}
          >
            {techs.map((tech) => (
              <li
                key={tech}
                className="text-sm text-gray-300 font-paragraph whitespace-nowrap"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </motion.article>
    </>
  );
}
