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

interface TextProps {
    className?: string;
    mainTitle?:string;
    title?: string;
    text?: string;
    theme?: TextTheme,
    align?: TextAlign
}

const Text = memo((props: TextProps) => {
    const {
        className,
        mainTitle,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
    } = props;

    return (
        <div className={classNames(cls.Text, { [cls[theme]]: true, [cls[align]]: true }, [className])}>
            {mainTitle && <h1 className={cls.mainTitle}>{mainTitle}</h1> }
            {title && <h2 className={cls.title}>{title}</h2> }
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});

export default Text;
