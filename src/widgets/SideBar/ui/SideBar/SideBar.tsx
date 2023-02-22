import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './SideBar.module.scss';

interface SideBarProps {
  className?: string
}

const SideBar: FC<SideBarProps> = ({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(true);
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
            <Button theme={ThemeButton.CLEAR} onClick={toggleSideBar} data-testid="sideBar-toggle">
                {t('menu')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};

export default SideBar;
