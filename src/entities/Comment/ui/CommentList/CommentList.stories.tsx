import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import CommentList from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comments: [
        {
            id: '1',
            text: 'some comment',
            articleId: '1',
            user: {
                id: '1',
                username: 'admin',
            },
        },
        {
            id: '2',
            text: 'some comment 2',
            articleId: '1',
            user: {
                id: '1',
                username: 'admin',
            },
        },
    ],

};
Primary.decorators = [StoreDecorator({})];

export const PrimaryNoComments = Template.bind({});
PrimaryNoComments.args = {
    comments: [],

};
Primary.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
    comments: [
        {
            id: '1',
            text: 'some comment',
            articleId: '1',
            user: {
                id: '1',
                username: 'admin',
            },
        },
        {
            id: '2',
            text: 'some comment 2',
            articleId: '1',
            user: {
                id: '1',
                username: 'admin',
            },
        },
    ],
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
];
