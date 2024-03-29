import React, { useContext } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ContactBoxContext } from "../../contexts/ContactBoxContext";
import { SocialMediaBox } from "../SocialMediaBox";

import * as S from "./styles";

export const SocialMediaRow: React.FC = ({ children }) => {
  const { setDisplay: setDisplayContactBox } = useContext(ContactBoxContext);

  const childrenAnimation = {
    hidden: {
      opacity: 0,
      transition: { when: "beforeChildren" },
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 3,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <S.Container initial="hidden" animate="show" variants={childrenAnimation}>
      <SocialMediaBox icon={<BsGithub />} />
      <SocialMediaBox icon={<BsLinkedin />} />
      <SocialMediaBox
        icon={<MdEmail />}
        onClick={() => setDisplayContactBox(true)}
      />
    </S.Container>
  );
};
