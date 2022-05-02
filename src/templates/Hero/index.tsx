/* eslint-disable react/no-unescaped-entities */

import { useTheme } from "@emotion/react";

import React, { useRef } from "react";
import {
  Fold,
  Grid,
  HeroBlob,
  PopupContact,
  SocialMediaRow,
} from "../../components";
import { presentationAnimation, profileHeroAnimation } from "./animations";

import * as S from "./styles";

export const Hero: React.FC = () => {
  const theme = useTheme();

  return (
    <Fold>
      <HeroBlob />
      <Grid>
        <S.ProfileHero
          {...profileHeroAnimation}
          src="/images/profile_hero.png"
        />
        <S.Presentation {...presentationAnimation}>
          <h1>Hey, there!</h1>
          <p>
            Nice to see you around here! I'm Matt, I've been developing software
            for more than 4 years now. I currently work with Reactjs, Nextjs and
            TypeScript.
          </p>
          <SocialMediaRow />
        </S.Presentation>
        <PopupContact />
      </Grid>
    </Fold>
  );
};
