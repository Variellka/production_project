import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import Text, { TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Clear = Template.bind({});
Clear.args = {
    mainTitle: 'Main Title',
    title: 'Title',
    text: 'text',
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    mainTitle: 'Main Title',
    title: 'Title',
    text: 'text',
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    theme: TextTheme.ERROR,
    title: 'Title error',
    text: 'Error',
};
