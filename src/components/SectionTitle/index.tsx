import React, { ReactElement, ReactNode } from "react";

import * as S from "./styles";

type Props = {
  icon?: ReactElement;
};

export const SectionTitle: React.FC<Props> = ({ children, icon }) => {
  const CustomIcon: React.FC = () =>
    icon
      ? React.cloneElement(icon, { size: 32, style: { marginLeft: "24px" } })
      : null;

  return (
    <>
      <S.Title
        initial={{ x: 500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }} // type: "tween"
      >
        <>
          {children}
          {icon && <CustomIcon />}
        </>
      </S.Title>
    </>
  );
};
