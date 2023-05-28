import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    mainTitle?:string;
    title?: string;
    text?: string;
    theme?: TextTheme
}

const Text = (props: TextProps) => {
    const {
        className,
        mainTitle,
        title,
        text,
        theme = TextTheme.PRIMARY,
    } = props;

    return (
        <div className={classNames(cls.Text, { [cls[theme]]: true }, [className, theme])}>
            {mainTitle && <h1 className={cls.mainTitle}>{mainTitle}</h1> }
            {title && <h2 className={cls.title}>{title}</h2> }
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};

export default Text;
