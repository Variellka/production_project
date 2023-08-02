import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import ArticleDetails from './ArticleDetails';

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    articleDetails: {
        isLoading: false,
        error: undefined,
        data: {},
    },
})];

export const PrimaryWithLoading = Template.bind({});
PrimaryWithLoading.args = {};
PrimaryWithLoading.decorators = [StoreDecorator({
    articleDetails: {
        isLoading: true,
        error: undefined,
    },
})];

export const PrimaryWithErrors = Template.bind({});
PrimaryWithErrors.args = {};
PrimaryWithErrors.decorators = [StoreDecorator({
    articleDetails: {
        isLoading: false,
        error: 'error',
    },
})];
