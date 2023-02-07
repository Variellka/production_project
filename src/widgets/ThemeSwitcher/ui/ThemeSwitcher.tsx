import Button, { ThemeButton } from "shared/ui/Button/Button";
import Icon from "shared/assets/icons/moon-sun-svgrepo-com.svg";
import { useTheme } from "app/providers/ThemeProvider";
import cls from "./ThemeSwitcher.module.scss";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
import { classNames } from "shared/lib/classNames/classNames";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
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
};

export default ThemeSwitcher;
