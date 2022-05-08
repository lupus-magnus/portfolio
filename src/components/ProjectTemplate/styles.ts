import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { rgba } from "polished";

export const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 5rem;
  gap: 3rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const GraphContainer = styled.div`
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 100%;
    order: -1;
  }
`;

export const Header = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 762px) {
    flex-direction: column;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const LogoContainer = styled.div`
  width: 80px;
`;

export const Logo = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 50%;

  object-fit: cover;

  filter: grayscale(1);

  transition: 700ms;

  &:hover {
    filter: grayscale(0);
  }
`;

export const Title = styled.h3`
  font-weight: 800;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gray500};
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: ${rgba(theme.colors.purple, 0.25)};

    width: fit-content;
    text-align: center;
    border-radius: 0.5rem;
  `}
`;

export const Description = styled.p`
  margin-top: 3rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.gray500};

  @media (max-width: 762px) {
    font-size: 1rem;
  }
`;

export const Options = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const Button = styled.button`
  ${({ theme }) => css`
    border: none;

    padding: 0.5rem 1rem;
    background-color: ${rgba(theme.colors.gray500, 0.25)};

    color: ${theme.colors.gray500};
    font-weight: 600;
    font-size: 1.5rem;

    width: fit-content;
    text-align: center;
    border-radius: 0.5rem;

    transition: 500ms;

    @media (max-width: 762px) {
      font-size: 1.25rem;
    }

    &:hover {
      cursor: pointer;
      background-color: ${theme.colors.green}; 
      color: ${theme.colors.background};
      )};
    }

    
  `}
`;

export const ExperiencesContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & h4 {
    font-weight: 600;
    font-size: 1.5rem;
  }
`;

export const ExperiencesList = styled.ul`
  list-style-type: circle;
`;

export const Experience = styled.li``;
