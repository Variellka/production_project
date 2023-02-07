import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/Applink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/"} className={cls.link}>
          MAIN
        </AppLink>
        <AppLink to={"/about"} className={cls.link}>
          ABOUT
        </AppLink>
      </div>
    </div>
  );
};
