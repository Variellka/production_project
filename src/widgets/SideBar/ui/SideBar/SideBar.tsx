import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./SideBar.module.scss";

interface SideBarProps {
  className?: string;
}

const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleSideBar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button theme={ThemeButton.CLEAR} onClick={toggleSideBar}>
        toggle
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default SideBar;
