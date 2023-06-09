import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './SideBarItem.module.scss';
import { SideBarItemType } from '../../../model/items';

interface SideBarItemProps {
    item: SideBarItemType,
    collapsed: boolean
}

const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink theme={AppLinkTheme.PRIMARY} to={item.path} className={cls.link}>
            <item.Icon className={classNames(cls.icon, {}, [])} />
            {!collapsed && <span>{t(item.text)}</span>}
        </AppLink>
    );
});

export default SideBarItem;
