import { FC, type ButtonHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clear-inverted',
  PAGE_ERROR = 'page-error',
  SIDEBAR = 'sideBar',
  FILLED = 'filled',
  FILLED_ALERT = 'filled-alert'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button:FC<ButtonProps> = memo((props: ButtonProps) => {
    const {
        theme = ThemeButton.FILLED, className, children, ...otherProps
    } = props;

    return (
        <button
            type="button"
            {...otherProps}
            className={classNames(cls.Button, {}, [className, cls[theme]])}
        >
            {children}
        </button>
    );
});
