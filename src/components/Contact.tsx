import { TbSend } from "react-icons/tb";
import { Button, buttonAnimation } from "../styles/global.styles";
import { motion } from "framer-motion";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
export default function Contact() {
  return (
    <section
      className="container lg:max-w-4xl  xl:max-w-full  px-4  mx-auto  pt-[8rem] pb-8 mt-4 overflow-x-hidden flex flex-col items-center"
      id="contact"
    >
      <motion.div
        className="flex flex-col items-center gap-4 mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.25, duration: 0.5 },
        }}
      >
        <h2 className="text-2xl font-semibold md:text-4xl lg:text-5xl text-light font-heading">
          Get In Touch.
        </h2>
        <p className="max-w-xl mb-4 text-sm leading-7 text-center font-paragraph text-light md:text-base">
          Thank you for taking the time to visit my portfolio website. I hope
          you found it informative and engaging. If you have any questions,
          please don't hesitate to contact me.
        </p>
        <Button whileHover={buttonAnimation}>
          <a
            href="mailto:aungchanmyathaw0610@gmail.com"
            className="flex items-center w-full h-full gap-2 py-1 text-base"
          >
            <TbSend size="20" />
            Say Hello
          </a>
        </Button>
        <div />
      </motion.div>
      <footer>
        <div className="flex justify-center gap-4 mb-2 text-xl text-white lg:hidden ">
          <motion.a
            href="https://www.facebook.com/profile.php?id=100073682343320"
            target="_blank"
            rel="noreferrer"
            initial={{ y: 0, color: "#F0EDFF" }}
            whileHover={{ y: "-4px", color: "#4979EE" }}
            whileTap={{ y: "-4px", color: "#4979EE" }}
          >
            <FaFacebookSquare />
          </motion.a>
          <motion.a
            href="https://github.com/aungchanmyaethaw"
            target="_blank"
            rel="noreferrer"
            initial={{ y: 0, color: "#F0EDFF" }}
            whileHover={{ y: "-4px", color: "#4979EE" }}
            whileTap={{ y: "-4px", color: "#4979EE" }}
          >
            <FaGithubSquare />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/aung-chan-myae-thaw-1bbab324b/"
            target="_blank"
            rel="noreferrer"
            initial={{ y: 0, color: "#F0EDFF" }}
            whileHover={{ y: "-4px", color: "#4979EE" }}
            whileTap={{ y: "-4px", color: "#4979EE" }}
          >
            <FaLinkedin />
          </motion.a>
        </div>
        <span className="text-sm text-secondary font-paragraph">
          Design & built by Aung Chan Myae Thaw
        </span>
      </footer>
    </section>
  );
}
