import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Presentation = styled.div`
  ${({ theme }) => css`
    width: 450px;
    max-width: 90%;

    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;

    & h1 {
      font-weight: 700;
      font-size: 4rem;
      color: ${theme.colors.green};
    }

    & p {
      font-weight: 600;
      font-size: 1.875rem;
      color: ${theme.colors.gray500};

      padding-bottom: 3rem;
      border-bottom: 2px solid ${theme.colors.purple};
    }

    @media (max-width: 768px) {
      height: fit-content;
      & h1 {
        font-weight: 700;
        font-size: 3rem;
      }

      & p {
        font-weight: 600;
        font-size: 1.5rem;
      }
    }
  `}
`;

export const BackgroundBlob = styled.img`
  position: absolute;
  z-index: -1;
  height: 90%;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    width: 1000px;
    left: 25%;
    top: 2rem;
    transform: translate(0, 0);
  }
`;

export const ProfileHero = styled.img`
  position: absolute;
  right: 0;
  max-height: 90%;

  @media (max-width: 768px) {
    display: none;
  }
`;
