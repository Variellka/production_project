import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleView } from 'entities/Article/model/types/article';
import ArticleViewSelector from './ArticleViewSelector';

export default {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = () => <ArticleViewSelector />;

export const TileView = Template.bind({});
TileView.args = {
    currentView: ArticleView.TILE,
};
