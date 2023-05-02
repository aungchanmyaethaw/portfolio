import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import About from "./components/About";
import Hero from "./components/Hero";
import LeftSocialBar from "./components/LeftSocialBar";
import Navbar from "./components/Navbar";
import RightEmailBar from "./components/RightEmailBar";
import MobileNavbar from "./components/MobileNavbar";

export default function App() {
  const [mobileNavStatus, setMobileNavStatus] = useState<boolean>(false);

  return (
    <main className="w-full min-h-screen bg-primary">
      <LeftSocialBar />
      <RightEmailBar />
      <Navbar setMobileNavStatus={setMobileNavStatus} />
      <Hero />
      <About />
      <AnimatePresence>
        {mobileNavStatus ? (
          <MobileNavbar setMobileNavStatus={setMobileNavStatus} />
        ) : null}
      </AnimatePresence>
    </main>
  );
}
