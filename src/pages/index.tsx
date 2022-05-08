import type { NextPage } from "next";
import { useRef } from "react";

import { PopupContact } from "../components";
import { Hero, ProjectsSection } from "../templates";

const Home: NextPage = () => {
  const mainRef = useRef(null);
  return (
    <main ref={mainRef}>
      <Hero />
      <PopupContact constraints={mainRef} />
      <ProjectsSection />
    </main>
  );
};
export default Home;
