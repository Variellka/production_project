import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: 'https://i.pinimg.com/236x/f2/af/2d/f2af2d731c56bbaa4223bccaaa1d3a03.jpg',
    size: 150,
};
