import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetailedPage = () => {
    const { id } = useParams<{id: string}>();

    return (
        <div><ArticleDetails id={id} /></div>
    );
};

export default memo(ArticleDetailedPage);
