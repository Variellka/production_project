import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleType } from 'entities/Article/model/types/article';
import { action } from '@storybook/addon-actions';
import ArticleTypeTabs from './ArticleTypeTabs';

export default {
    title: 'entities/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const TileView = Template.bind({});
TileView.args = {
    value: ArticleType.ALL,
    onChangeType: action('onChangeType'),
};
