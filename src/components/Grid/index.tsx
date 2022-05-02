import React from "react";
import * as S from "./styles";

type Props = {
  noPadding?: boolean;
  ref?: React.RefObject<HTMLDivElement>;
};

export const Grid: React.FC<Props> = ({ children, noPadding = false, ref }) => {
  return (
    <S.GridStructure ref={ref} noPadding={noPadding}>
      {children}
    </S.GridStructure>
  );
};
