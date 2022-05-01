import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Title = styled(motion.h2)`
  font-weight: 800;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.green};

  display: flex;
  align-items: center;

  @media (max-width: 762px) {
    font-size: 2.5rem;
  }
`;
