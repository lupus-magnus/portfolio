import { css } from "@emotion/react";
import styled from "@emotion/styled";

const noPaddingModifier = () => css`
  padding: 0 2rem;
`;

export const GridStructure = styled.div<{ noPadding: boolean }>`
  ${({ noPadding }) => css`
    position: relative;
    width: 100%;
    max-width: 1120px;
    padding: 3rem 2rem;
    margin: auto;
    ${noPadding && noPaddingModifier()}
  `}
`;
