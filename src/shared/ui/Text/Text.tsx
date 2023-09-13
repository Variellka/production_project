import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    CENTER = 'center',
    LEFT = 'left',
    RIGHT = 'right'
}

export enum TextSize {
    M = 'medium',
    L = 'large'
}

interface TextProps {
    className?: string;
    mainTitle?:string;
    title?: string;
    text?: string;
    theme?: TextTheme,
    align?: TextAlign,
    size?: TextSize
}

const Text = memo((props: TextProps) => {
    const {
        className,
        mainTitle,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    return (
        <div className={
            classNames(
                cls.Text,
                { [cls[theme]]: true, [cls[align]]: true, [cls[size]]: true },
                [className],
            )
        }
        >
            {mainTitle && <h1 className={cls.mainTitle}>{mainTitle}</h1> }
            {title && <h2 className={cls.title}>{title}</h2> }
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});

export default Text;
