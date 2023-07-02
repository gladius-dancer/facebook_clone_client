import {classNames} from 'shared/lib/classNames/classNames';
import React from 'react';
import {Theme, useTheme} from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import {Btn, ButtonTheme} from 'shared/ui/Button/Button';
import cls from "widgets/Navbar/ui/Navbar.module.scss";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness5Icon from "@mui/icons-material/Brightness5";

interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <>
            {theme === Theme.DARK
                ? <span onClick={toggleTheme} className={cls.PupupItem}>
                    <li><Brightness5Icon/></li> <span>Дневной режим</span>
                  </span>
                : <span onClick={toggleTheme} className={cls.PupupItem}>
                    <li><DarkModeIcon/></li> <span>Ночной режим</span>
                  </span>
            }
        </>
    );
};
