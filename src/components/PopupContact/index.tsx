import { useTheme } from "@emotion/react";
import React, { FormEvent, useState } from "react";
import {
  MdOutlineArrowForwardIos,
  MdCheck,
  MdOutlineClose,
} from "react-icons/md";

import * as S from "./styles";

type PopupProps = {
  constraints?: React.RefObject<Element> | undefined;
};

export const PopupContact: React.FC<PopupProps> = ({ constraints }) => {
  const theme = useTheme();
  const [isShowing, setIsShowing] = useState(true);
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setMessageSent(true);
    }, 1500);
  };

  if (!isShowing) {
    return <></>;
  }

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
              <S.CloseButton onClick={() => setIsShowing(false)} />
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
