import React from "react";
import * as S from "./styles";

type Props = {
  noPadding?: boolean;
  ref?: React.RefObject<HTMLDivElement>;
  children?: React.ReactNode;
};

// eslint-disable-next-line react/display-name
export const Grid = React.forwardRef<HTMLDivElement, Props>(
  ({ children, noPadding = false }, ref) => {
    return (
      <S.GridStructure ref={ref} noPadding={noPadding}>
        {children}
      </S.GridStructure>
    );
  }
);
