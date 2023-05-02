import { motion } from "framer-motion";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function LeftSocialBar() {
  return (
    <div className="fixed top-0 left-0 right-auto  items-end justify-center h-screen  hidden lg:flex w-[80px] ">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-4 text-2xl text-white">
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
        <div className="h-[12rem] w-[1px] bg-secondary bg-opacity-50"></div>
      </div>
    </div>
  );
}
