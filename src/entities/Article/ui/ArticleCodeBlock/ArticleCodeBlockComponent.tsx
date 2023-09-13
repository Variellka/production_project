import { memo } from 'react';
import Code from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
    className?: string,
    block: ArticleCodeBlock
}

const ArticleCodeBlockComponent = memo((props:ArticleCodeBlockComponentProps) => {
    const { className, block } = props;

    return (
        <Code className={className} text={block.code} />
    );
});

export default ArticleCodeBlockComponent;
