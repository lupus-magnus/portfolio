import { useTheme } from "@emotion/react";
import React from "react";
import { BsFillGearFill } from "react-icons/bs";

import { Fold, Grid, SectionTitle } from "../../components";

// import * as S from "./styles";

export const ProjectsSection: React.FC = () => {
  const theme = useTheme();
  return (
    <Fold>
      <Grid>
        <SectionTitle icon={<BsFillGearFill />}>Projects</SectionTitle>
      </Grid>
    </Fold>
  );
};
