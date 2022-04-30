import type { NextPage } from "next";
import { Hero, ProjectsSection } from "../templates";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <ProjectsSection />
    </>
  );
};
export default Home;
