import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import SideBar from './SideBar';

export default {
    title: 'widget/SideBar',
    component: SideBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    }),
];

export const LightNoAuth = Template.bind({});
LightNoAuth.args = {};
LightNoAuth.decorators = [StoreDecorator({})];
