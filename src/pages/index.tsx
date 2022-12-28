import type { NextPage } from "next";

import { ContactBoxProvider } from "../contexts/ContactBoxContext";
import { Hero, ProjectsSection } from "../templates";

const Home: NextPage = () => {
  return (
    <>
      <ContactBoxProvider>
        <Hero />
      </ContactBoxProvider>
      <ProjectsSection />
    </>
  );
};
export default Home;
