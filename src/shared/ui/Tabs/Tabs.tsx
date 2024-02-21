import { ReactNode, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';

export interface TabItem {
    value?: string,
    children: ReactNode
}

export interface TabsProps {
    className?: string,
    tabs: TabItem[],
    value: string,
    onTabClick: (tab: TabItem) => void
}

const Tabs = memo((props: TabsProps) => {
    const {
        className, tabs, value, onTabClick,
    } = props;

    const clickHandle = useCallback((value:TabItem) => () => onTabClick(value), [onTabClick]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <div
                    className={classNames(cls.Tab, { [cls.active]: value === tab.value }, [])}
                    key={tab.value}
                    onClick={clickHandle(tab)}
                >
                    {tab.children}
                </div>
            ))}
        </div>
    );
});

export default Tabs;
