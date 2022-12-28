import React, { useState } from "react";

type ContactBoxContextDTO = {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ContactBoxContext = React.createContext(
  {} as ContactBoxContextDTO
);

type Props = {
  children: React.ReactNode;
};

export const ContactBoxProvider = ({ children }: Props) => {
  const [display, setDisplay] = useState(false);

  return (
    <ContactBoxContext.Provider value={{ display, setDisplay }}>
      {children}
    </ContactBoxContext.Provider>
  );
};
