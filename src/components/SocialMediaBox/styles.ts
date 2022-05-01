import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Box = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background: rgba(51, 51, 51, 0.25);
  box-shadow: 0px 0px 4px 4px rgba(221, 221, 221, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;

  /* transition: 500ms; */
`;
