import { motion } from "framer-motion";
export default function RightEmailBar() {
  return (
    <div className="fixed top-0 right-0  items-end justify-center h-screen  w-[80px] lg:flex hidden">
      <div className="flex flex-col items-center gap-4">
        <motion.a
          href="mailto:aungchanmyathaw0610@gmail.com"
          className="block mb-[8rem] tracking-widest text-sm font-semibold rotate-90 text-light"
          whileHover={{ color: "#4979EE" }}
          whileTap={{ color: "#4979EE" }}
          rel="noreferrer"
        >
          aungchanmyaethaw0610@gmail.com
        </motion.a>

        <div className="h-[12rem] w-[1px] bg-secondary bg-opacity-50" />
      </div>
    </div>
  );
}
