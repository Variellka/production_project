import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className? : string,
    src?: string,
    size?: number,
    srcBase?: string
}

const Avatar = ({
    className,
    src,
    size = 120,
    srcBase = 'https://pikuco.ru/upload/test_stable/1fd/1fd64968a32894062508cf131b7bb44d.webp',
}: AvatarProps) => {
    const styles = useMemo<CSSProperties>(() => (
        {
            width: size,
            height: size,
        }
    ), [size]);

    return (
        <div className={classNames(cls.Avatar, {}, [className])} style={styles}>
            <img alt="avatar" src={src || srcBase} />
        </div>
    );
};

export default Avatar;
