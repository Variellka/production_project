import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Skeleton from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    borderRadius: '50%',
    width: '200px',
    height: '200px',
};

export const Dark = Template.bind({});
Dark.args = {
    borderRadius: '50%',
    width: '200px',
    height: '200px',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
