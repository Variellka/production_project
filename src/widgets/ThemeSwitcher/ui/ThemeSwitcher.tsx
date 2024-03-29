import { Button, ThemeButton } from 'shared/ui/Button/Button';
import Icon from 'shared/assets/icons/moon-sun-svgrepo-com.svg';
import { useTheme } from 'app/providers/ThemeProvider';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            <Icon
                className={classNames(theme === Theme.DARK ? cls.dark : cls.light, {}, [
                    cls.basic,
                ])}
            />
        </Button>
    );
});

export default ThemeSwitcher;
