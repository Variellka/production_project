import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

export enum IconColor {
    PRIMARY = 'primary',
    BACKGROUND = 'background'
}

interface IconProps {
    className?: string,
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>,
    color?: IconColor
}

const Icon = (props: IconProps) => {
    const { className, Svg, color = IconColor.PRIMARY } = props;

    return (
        <Svg className={classNames(cls.Icon, { [cls[color]]: true }, [className])} />
    );
};

export default Icon;
