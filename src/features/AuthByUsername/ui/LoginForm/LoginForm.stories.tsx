import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
    },

})];

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {};
PrimaryLoading.decorators = [StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
        isLoading: true,
    },

})];

export const PrimaryWithError = Template.bind({});
PrimaryWithError.args = {};
PrimaryWithError.decorators = [StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
        error: 'User not found',
    },

})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
        },
    }),
];
