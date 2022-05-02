import { useTheme } from "@emotion/react";
import React, {
  FormEvent,
  MutableRefObject,
  RefObject,
  useRef,
  useState,
} from "react";
import { MdOutlineArrowForwardIos, MdCheck } from "react-icons/md";
import * as S from "./styles";

export const PopupContact: React.FC = () => {
  const theme = useTheme();
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setMessageSent(true);
    }, 1500);
  };

  return (
    <S.PopupContainer
      initial={{ opacity: 0 }}
      animate={{
        y: [20, 0],
        opacity: [0, 1],
      }}
      transition={{
        delay: 4,
        type: "spring",
        duration: 0.8,
      }}
      onSubmit={handleSubmit}
    >
      <S.PopupForm>
        {messageSent ? (
          <S.PopupLabel sent>
            <MdCheck />
            Thanks for that!
          </S.PopupLabel>
        ) : (
          <>
            <S.PopupLabel>Get in touch!</S.PopupLabel>
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
