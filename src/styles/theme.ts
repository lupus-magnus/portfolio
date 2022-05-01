import "@emotion/react";

export const theme = {
  colors: {
    background: "#222222",
    purple: "#AF2BBF",
    green: "#40F99B",
    gray500: "#dddddd",
    gray700: "#b7b7b7",
    gray800: "#7e7e7e",
    gray850: "#555",
  },
};

type CustomTheme = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}
