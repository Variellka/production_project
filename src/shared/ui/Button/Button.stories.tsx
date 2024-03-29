import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Button, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
    theme: ThemeButton.CLEAR,
    children: 'click me',
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    theme: ThemeButton.CLEAR,
    children: 'click me',
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    theme: ThemeButton.PAGE_ERROR,
    children: 'click me',
};

export const SideBar = Template.bind({});
SideBar.args = {
    theme: ThemeButton.SIDEBAR,
    children: '>',
};

export const SideBarDark = Template.bind({});
SideBarDark.args = {
    theme: ThemeButton.SIDEBAR,
    children: '>',
};
SideBarDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Modal = Template.bind({});
Modal.args = {
    theme: ThemeButton.FILLED,
    children: 'log in',
};

export const ModalDark = Template.bind({});
ModalDark.args = {
    theme: ThemeButton.FILLED,
    children: 'log in',
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
