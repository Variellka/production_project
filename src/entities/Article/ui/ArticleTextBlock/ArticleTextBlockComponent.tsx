import Text from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockProps {
    className?: string,
    block: ArticleTextBlock;
}

const ArticleTextBlockComponent = memo((props :ArticleTextBlockProps) => {
    const { className, block } = props;

    return (
        <div className={classNames('', {}, [className])}>
            {block.title && <Text title={block.title} className={cls.textBlockTitle} />}
            {block.paragraphs.map((paragraph) => (
                <Text text={paragraph} className={cls.textBlock} key={paragraph} />
            ))}
        </div>
    );
});

export default ArticleTextBlockComponent;
