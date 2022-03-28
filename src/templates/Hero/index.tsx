/* eslint-disable react/no-unescaped-entities */
import { useTheme } from "@emotion/react";
import React from "react";
import { Fold, Grid } from "../../components";

import * as S from "./styles";

export const Hero: React.FC = () => {
  const theme = useTheme();
  return (
    <Fold>
      <Grid>
        <S.BackgroundBlob src="/vectors/hero_vector.svg" alt="vector" />
        <S.ProfileHero src="/images/profile_hero.png" />
        <S.Presentation>
          <h1>Hey, there!</h1>
          <p>
            Nice to see you around here! I'm Matt, I've been developing software
            for more than 4 years now. I currently work with Reactjs, Nextjs and
            TypeScript.
          </p>
        </S.Presentation>
      </Grid>
    </Fold>
  );
};
