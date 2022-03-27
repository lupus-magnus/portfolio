import { useTheme } from "@emotion/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const theme = useTheme();
  return <h1 style={{ color: `${theme.colors.purple}` }}>Hello</h1>;
};

export default Home;
