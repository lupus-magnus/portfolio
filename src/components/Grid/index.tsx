import React from "react";
import * as S from "./styles";

type Props = {
  noPadding?: boolean;
};

export const Grid: React.FC<Props> = ({ children, noPadding = false }) => {
  return <S.GridStructure noPadding={noPadding}>{children}</S.GridStructure>;
};
