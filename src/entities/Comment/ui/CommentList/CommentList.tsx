import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Loader from 'shared/ui/Loader/Loader';
import Text from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import cls from './CommentList.module.scss';
import CommentCard from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string,
    comments?: Comment[],
    isLoading?: boolean,
    error?: string
}

const CommentList = (props: CommentListProps) => {
    const {
        className, comments, isLoading, error,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        comment={comment}
                        className={cls.comment}
                    />
                ))
                : <Text title={t('no comments')} />}
        </div>
    );
};

export default CommentList;
