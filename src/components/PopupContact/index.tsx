import { useTheme } from "@emotion/react";
import React, { FormEvent, useContext, useState } from "react";
import { MdOutlineArrowForwardIos, MdCheck } from "react-icons/md";
import { ContactBoxContext } from "../../contexts/ContactBoxContext";

import * as S from "./styles";

type PopupProps = {
  constraints?: React.RefObject<Element> | undefined;
};

export const PopupContact: React.FC<PopupProps> = ({ constraints }) => {
  const theme = useTheme();
  const { setDisplay: setDisplayContactBox } = useContext(ContactBoxContext);
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setMessageSent(true);
    }, 500);
  };

  return (
    <S.PopupContainer
      onSubmit={handleSubmit}
      drag
      dragConstraints={constraints}
    >
      <S.PopupForm>
        {messageSent ? (
          <S.PopupLabel sent>
            <MdCheck />
            Thanks for that!
          </S.PopupLabel>
        ) : (
          <>
            <S.PopupLabel>
              Get in touch!{" "}
              <S.CloseButton onClick={() => setDisplayContactBox(false)} />
            </S.PopupLabel>
            <S.PopupInput placeholder="Send a message, feedback, or just say something" />
          </>
        )}
      </S.PopupForm>
      {!messageSent && (
        <S.SubmitButton type="submit">
          <MdOutlineArrowForwardIos color={theme.colors.purple} size={18} />
        </S.SubmitButton>
      )}
    </S.PopupContainer>
  );
};
