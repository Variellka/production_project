import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import Text from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockProps {
    className?: string,
    block: ArticleImageBlock
}

const ArticleImageBlockComponent = memo((props: ArticleImageBlockProps) => {
    const { className, block } = props;
    return (
        <div className={classNames(cls.ArticleImageBlock, {}, [className])}>
            {block.title && <Text title={block.title} className={cls.imageBlockTitle} />}
            <img src={block.src} alt="loading..." />
        </div>
    );
});

export default ArticleImageBlockComponent;
