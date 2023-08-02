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
    // eslint-disable-next-line max-len
    srcBase = 'https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png',
}: AvatarProps) => {
    const styles = useMemo<CSSProperties>(() => (
        {
            width: size,
            height: size,
            borderRadius: size,
        }
    ), [size]);

    return (
        <div className={classNames(cls.Avatar, {}, [className])} style={styles}>
            <img alt="avatar" src={src || srcBase} style={{ borderRadius: styles.borderRadius }} />
        </div>
    );
};

export default Avatar;
