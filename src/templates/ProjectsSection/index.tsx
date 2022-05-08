import { useTheme } from "@emotion/react";
import React from "react";
import { BsFillGearFill } from "react-icons/bs";

import { Fold, Grid, SectionTitle, ProjectTemplate } from "../../components";

export const ProjectsSection: React.FC = () => {
  const theme = useTheme();
  return (
    <Fold>
      <Grid>
        <SectionTitle icon={<BsFillGearFill />}>Projects</SectionTitle>
        <ProjectTemplate />
      </Grid>
    </Fold>
  );
};
