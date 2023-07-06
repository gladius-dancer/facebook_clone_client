import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import cls from 'widgets/Navbar/ui/Navbar.module.scss';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness5Icon from '@mui/icons-material/Brightness5';

interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {theme === Theme.DARK
                ? (
                    <span onClick={toggleTheme} className={cls.PupupItem}>
                        <span className={cls.IconWrap}><Brightness5Icon /></span>
                        {' '}
                        <span>Дневной режим</span>
                    </span>
                )
                : (
                    <span onClick={toggleTheme} className={cls.PupupItem}>
                        <span className={cls.IconWrap}><DarkModeIcon /></span>
                        {' '}
                        <span>Ночной режим</span>
                    </span>
                )}
        </>
    );
};
