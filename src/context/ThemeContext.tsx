import { createContext } from "react";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

interface Props {
    theme: Theme;
    changeTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext({
    theme: Theme.LIGHT,
    changeTheme: (theme: Theme) => {},
});