import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string,
    width?: string,
    height?: string,
    borderRadius?:string
}

const Skeleton = memo((props: SkeletonProps) => {
    const {
        className, width, height, borderRadius,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius,
    };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    );
});

export default Skeleton;
