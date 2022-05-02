import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { rgba } from "polished";

export const PopupContainer = styled(motion.form)`
  ${({ theme }) => css`
    position: absolute;
    width: 464px;

    bottom: 2rem;
    right: 0.5rem;
    border-radius: 0.5rem;

    background-color: ${theme.colors.gray900};
    box-shadow: 0px 0px 8px 2px ${rgba(theme.colors.purple, 0.5)};

    display: flex;
    align-items: stretch;
    justify-content: space-between;

    transition: 500ms;

    @media (max-width: 768px) {
      display: none;
    }
  `}
`;

export const SubmitButton = styled.button`
  ${({ theme }) => css`
    width: 42px;
    background-color: ${theme.colors.gray900};

    border: none;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;

    border-left: 1px solid ${rgba(theme.colors.gray500, 0.25)};

    transition: 300ms;

    &:hover {
      cursor: pointer;
      filter: brightness(1.1);
    }
  `}
`;

export const PopupForm = styled.div`
  padding: 1.5rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PopupLabel = styled.label<{ sent?: boolean }>`
  ${({ theme, sent }) => css`
    font-weight: 600;
    font-size: 1.375rem;
    color: ${sent ? theme.colors.green : theme.colors.purple};

    display: flex;
    align-items: center;
    gap: 1rem;
  `}
`;

export const PopupInput = styled.textarea`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    border-radius: 8px;
    height: 2.5rem;
    padding: 0.5rem 1rem;

    border: none;

    font-weight: 500;
    font-size: 0.875rem;
    color: ${theme.colors.gray700};
    font-family: "Poppins", sans-serif;

    &::placeholder {
      font-weight: 300;
      font-size: 0.85rem;
      color: ${theme.colors.gray700};
      font-family: "Poppins", sans-serif;
    }

    &:focus {
      height: 4rem;
    }
  `}
`;
