import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import Tabs from './Tabs';
import { ThemeButton } from '../Button/Button';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    tabs: [
        {
            value: 'tab1',
            children: 'tab1',
        },
        {
            value: 'tab2',
            children: 'tab2',
        },
        {
            value: 'tab3',
            children: 'tab4',
        },
    ],
    value: 'tab2',
    onTabClick: action('onTabClick'),
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    tabs: [
        {
            value: 'tab1',
            children: 'tab1',
        },
        {
            value: 'tab2',
            children: 'tab2',
        },
        {
            value: 'tab3',
            children: 'tab4',
        },
    ],
    value: 'tab2',
    onTabClick: action('onTabClick'),
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
