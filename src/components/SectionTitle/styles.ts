import styled from "@emotion/styled";

export const Title = styled.h2`
  font-weight: 800;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.green};

  @media (max-width: 762px) {
    font-size: 2.5rem;
  }
`;
