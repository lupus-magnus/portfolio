import { useTheme } from "@emotion/react";
import React, { ReactElement } from "react";
import * as S from "./styles";

type Props = {
  icon?: ReactElement;
  onClick?: () => void;
};

export const SocialMediaBox: React.FC<Props> = ({ icon, onClick }) => {
  const theme = useTheme();

  const variant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const CustomIcon: React.FC = () =>
    icon
      ? React.cloneElement(icon, { size: 32, color: theme.colors.gray800 })
      : null;

  return (
    <S.Box
      whileHover={{
        scale: 1.1,
        cursor: "pointer",
        transition: { type: "spring" },
      }}
      variants={variant}
      onClick={onClick}
    >
      <CustomIcon />
    </S.Box>
  );
};
