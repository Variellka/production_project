import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleSortField } from 'entities/Article';
import ArticleSortSelector from './ArticleSortSelector';

export default {
    title: 'entities/ArticleSortSelector',
    component: ArticleSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => <ArticleSortSelector {...args} />;

export const TileView = Template.bind({});
TileView.args = {
    sort: ArticleSortField.CREATED,
    order: 'asc',
};
