import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import Text, { TextAlign, TextSize, TextTheme } from './Text';

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

export const AlignCenter = Template.bind({});
AlignCenter.args = {
    mainTitle: 'Main Title',
    title: 'Title',
    text: 'text',
    align: TextAlign.CENTER,
};

export const AlignRight = Template.bind({});
AlignRight.args = {
    mainTitle: 'Main Title',
    title: 'Title',
    text: 'text',
    align: TextAlign.RIGHT,
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
    mainTitle: 'Main Title',
    title: 'Title',
    text: 'text',
    size: TextSize.M,
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
    mainTitle: 'Main Title',
    title: 'Title',
    text: 'text',
    size: TextSize.L,
};
