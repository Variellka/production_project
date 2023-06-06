import { memo, type FC } from 'react';
import { type LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavLink } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to, className, children, theme = AppLinkTheme.PRIMARY,
    } = props;

    return (
        <NavLink
            style={({ isActive }) => (isActive
                ? {
                    color: 'var(--secondary-color)',
                }
                : {
                    color: 'var(--bg-color)',
                })}
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        >
            {children}
        </NavLink>
    );
});
