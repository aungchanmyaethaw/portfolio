import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import About from "./components/About";
import Hero from "./components/Hero";
import LeftSocialBar from "./components/LeftSocialBar";
import Navbar from "./components/Navbar";
import RightEmailBar from "./components/RightEmailBar";
import MobileNavbar from "./components/MobileNavbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [mobileNavStatus, setMobileNavStatus] = useState<boolean>(false);

  return (
    <main className="w-full min-h-screen bg-primary">
      <LeftSocialBar />
      <RightEmailBar />
      <Navbar setMobileNavStatus={setMobileNavStatus} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <AnimatePresence>
        {mobileNavStatus ? (
          <MobileNavbar setMobileNavStatus={setMobileNavStatus} />
        ) : null}
      </AnimatePresence>
    </main>
  );
}
