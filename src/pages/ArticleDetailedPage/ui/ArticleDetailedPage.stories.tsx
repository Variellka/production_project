import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import ArticleDetailedPage from './ArticleDetailedPage';

export default {
    title: 'pages/ArticleDetailedPage',
    component: ArticleDetailedPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailedPage>;

const Template: ComponentStory<typeof ArticleDetailedPage> = () => <ArticleDetailedPage />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
