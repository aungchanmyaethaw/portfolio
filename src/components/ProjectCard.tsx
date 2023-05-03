import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { ProjectProps } from "./Projects";
import { ImageContainer } from "./About";

const afterVariants = {
  initial: {
    opacity: 0.5,
  },
  animate: {
    opacity: 0,
  },
};

interface ProjectCardProps extends ProjectProps {
  index: number;
}

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
      <article className="relative z-10 block px-4 py-6 rounded-lg bg-opacity-20 md:hidden bg-secondary">
        <div className="flex items-center gap-4 mb-6 ">
          <h3 className="text-xl font-semibold font-heading text-light ">
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
      </article>

      {/* large */}

      <article
        className={` hidden md:flex items-start   ${
          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <a
          href={deploy}
          rel="noreferrer"
          target="_blank"
          className="block basis-1/2 "
        >
          <ImageContainer className="relative w-full h-full basis-1/2">
            <motion.div
              className="after"
              variants={afterVariants}
              whileHover="animate"
              initial="initial"
            />

            <img
              src={image}
              alt={title}
              className="block object-cover w-full h-full rounded-lg"
            />
          </ImageContainer>
        </a>

        <div
          className={`relative z-10 ${
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
            } flex items-center gap-4 font-medium text-light font-paragraph`}
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
      </article>
    </>
  );
}
