import { classNames } from 'shared/lib/classNames/classNames';
import Avatar from 'shared/ui/Avatar/Avatar';
import Text from 'shared/ui/Text/Text';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string,
    comment: Comment,
    isLoading?: boolean
}

const CommentCard = (props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton height="30px" width="30px" borderRadius="30px" className={cls.avatar} />
                    <Skeleton height="30px" width="150px" />
                </div>
                <Skeleton height="30px" />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={RoutePath.profile + comment.user.id} className={cls.header}>
                <Avatar size={30} className={cls.avatar} src={comment.user.avatar} />
                <Text title={comment.user.username} />
            </AppLink>
            <Text text={comment.text} />
        </div>
    );
};

export default CommentCard;
