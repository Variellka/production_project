import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import CommentCard from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comment: {
        id: '1',
        text: 'some comment',
        articleId: '1',
        user: {
            id: '1',
            username: 'admin',
        },
    },
};
Primary.decorators = [StoreDecorator({})];

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
    comment: {
        id: '1',
        text: 'some comment',
        articleId: '1',
        user: {
            id: '1',
            username: 'admin',
        },
    },
    isLoading: true,
};
Primary.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
    comment: {
        id: '1',
        text: 'some comment',
        articleId: '1',
        user: {
            id: '1',
            username: 'admin',
        },
    },
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
];

export const DarkLoading = Template.bind({});
DarkLoading.args = {
    comment: {
        id: '1',
        text: 'some comment',
        articleId: '1',
        user: {
            id: '1',
            username: 'admin',
        },
    },
    isLoading: true,
};
DarkLoading.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
];
