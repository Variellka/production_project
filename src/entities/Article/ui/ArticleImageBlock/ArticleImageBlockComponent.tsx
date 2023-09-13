import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import Text, { TextAlign } from 'shared/ui/Text/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockProps {
    className?: string,
    block: ArticleImageBlock
}

const ArticleImageBlockComponent = memo((props: ArticleImageBlockProps) => {
    const { className, block } = props;
    return (
        <div className={classNames(cls.ArticleImageBlock, {}, [className])}>
            <img src={block.src} alt="loading..." />
            {block.title
            && (
                <Text
                    title={block.title}
                    className={cls.imageBlockTitle}
                    align={TextAlign.CENTER}
                />
            )}
        </div>
    );
});

export default ArticleImageBlockComponent;
