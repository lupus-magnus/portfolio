import { useTheme } from "@emotion/react";
import React, { ReactElement } from "react";
import * as S from "./styles";

type Props = {
  icon?: ReactElement;
};

export const SocialMediaBox: React.FC<Props> = ({ icon }) => {
  const theme = useTheme();

  const CustomIcon: React.FC = () =>
    icon
      ? React.cloneElement(icon, { size: 32, color: theme.colors.background })
      : null;

  return (
    <S.Box
    // whileHover={{ scale: 1.05 }}
    // transition={{ duration: 0.5, type: "tween" }}
    >
      <CustomIcon />
    </S.Box>
  );
};
