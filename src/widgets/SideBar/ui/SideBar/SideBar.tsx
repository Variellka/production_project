import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import HomeIcon from 'shared/assets/icons/home-svgrepo-com.svg';
import AboutIcon from 'shared/assets/icons/about-svgrepo-com.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './SideBar.module.scss';

interface SideBarProps {
  className?: string
}

const SideBar: FC<SideBarProps> = ({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const toggleSideBar = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
            data-testid="sideBar-wrapper"
        >
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={RoutePath.main} className={cls.link}>
                    <HomeIcon className={classNames(cls.icon, {}, [])} />
                    {!collapsed && <span>{t('main')}</span>}
                </AppLink>
                <AppLink to={RoutePath.about} className={cls.link}>
                    <AboutIcon className={classNames(cls.icon, {}, [])} />
                    {!collapsed && <span>{t('about')}</span>}
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
            <Button
                className={cls.sideBarBtn}
                theme={ThemeButton.SIDEBAR}
                onClick={toggleSideBar}
                data-testid="sideBar-toggle"
            >
                {collapsed ? '>' : '<'}
            </Button>
        </div>
    );
};

export default SideBar;
