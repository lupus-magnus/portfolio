import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Box = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.gray850};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 500ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
