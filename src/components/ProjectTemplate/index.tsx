import React from "react";
import { useTheme } from "@emotion/react";
import { rgba } from "polished";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

import { useWindowSize } from "../../hooks";
import * as S from "./styles";

const mockedProject = {
  logo: "/images/mock-logo.jpg",
  title: "MiProjex",
  tags: ["Frontend", "SOLID", "Nextjs"],
  description:
    "A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto ",
  experiences: [
    "CMS Integration",
    "React Hooks and Contexts",
    "Implementation of i18n",
  ],
  stacks: [
    { name: "TypeScript", percentage: 0.65 },
    { name: "Python", percentage: 0.1 },
    { name: "CSS", percentage: 0.25 },
  ],
};

const data = [
  { name: "TypeScript", x: 21 },
  { name: "Python", x: 22 },
  { name: "CSS", x: -32 },
  { name: "Shell", x: 10 },
  { name: "JavaScript", x: 37 },
];

export const ProjectTemplate: React.FC = () => {
  const theme = useTheme();

  const { width } = useWindowSize();
  const isTouch = width < 762;
  const graphSize = isTouch ? 250 : 400;
  const graphMargin = isTouch ? 16 : 32;

  return (
    <S.ProjectContainer>
      <S.GraphContainer>
        <RadarChart
          style={{ overflowY: "hidden" }}
          height={graphSize}
          width={graphSize}
          outerRadius="50%"
          data={data}
          margin={{
            top: graphMargin,
            right: graphMargin,
            bottom: graphMargin,
            left: graphMargin,
          }}
        >
          <PolarGrid />
          <PolarAngleAxis stroke={theme.colors.gray500} dataKey="name" />
          <PolarRadiusAxis stroke="transparent" />
          <Radar
            color="white"
            dataKey="x"
            stroke={theme.colors.purple}
            fill={rgba(theme.colors.purple, 0.5)}
            fillOpacity={0.5}
          />
        </RadarChart>
      </S.GraphContainer>
      <S.InfoContainer>
        <S.Header>
          <S.LogoContainer>
            <S.Logo src={mockedProject.logo} />
          </S.LogoContainer>

          <S.HeaderContent>
            <S.Title>{mockedProject.title}</S.Title>
            <S.TagContainer>
              {mockedProject.tags.map((tag) => (
                <S.Tag key={tag}>{tag}</S.Tag>
              ))}
            </S.TagContainer>
          </S.HeaderContent>
        </S.Header>
        <S.Description>{mockedProject.description}</S.Description>
        <S.Options>
          <S.Button>What?</S.Button>
          <S.Button>Show me the code!</S.Button>
        </S.Options>
        <S.ExperiencesContainer>
          <h4>Experiences</h4>
          <S.ExperiencesList>
            {mockedProject.experiences.map((xp) => (
              <li key={xp}>{xp}</li>
              //   <S.Experience key={xp}>{xp}</S.Experience>
            ))}
          </S.ExperiencesList>
        </S.ExperiencesContainer>
      </S.InfoContainer>
    </S.ProjectContainer>
  );
};
