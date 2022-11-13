import { ReactNode, useState } from "react";
import { Theme, ThemeContext } from '../context/ThemeContext';
import { ChangeCssRootVariables } from "../model/ChangeCssRootVariables";
import { storage } from '../model/Storage';

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT);

    ChangeCssRootVariables(theme);

    const changeTheme = (theme: Theme): void => {
        storage.setItem('theme', theme);
        setTheme(theme);
        ChangeCssRootVariables(theme);
    };

    const contextProvider = {
        theme,
        changeTheme,
    }

    return (
        <ThemeContext.Provider value={contextProvider} {...props}>
            {children}
        </ThemeContext.Provider>
    )
};