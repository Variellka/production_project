import {
    FC, memo, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { SideBarItemsList } from 'widgets/SideBar/model/items';
import cls from './SideBar.module.scss';
import SideBarItem from '../SideBarItem/SideBarItem';

interface SideBarProps {
  className?: string
}

const SideBar: FC<SideBarProps> = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSideBar = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => (
        SideBarItemsList.map((item) => (
            <SideBarItem item={item} collapsed={collapsed} key={item.path} />
        ))
    ), [collapsed]);

    return (
        <div
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
            data-testid="sideBar-wrapper"
        >
            <div className={cls.links}>
                {itemsList}
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
});

export default SideBar;
