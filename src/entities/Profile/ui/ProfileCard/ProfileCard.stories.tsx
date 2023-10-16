import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import ProfileCard from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        id: '1',
        firstname: 'alex',
        lastname: 'levchenko',
        age: 30,
        currency: Currency.BYN,
        country: Country.Belarus,
        city: 'minsk',
        username: 'user',
        // eslint-disable-next-line max-len
        avatar: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
    },
};

export const PrimaryWithValidateErrors = Template.bind({});
PrimaryWithValidateErrors.args = {
    data: {
        id: '1',
        firstname: '',
        lastname: '',
        age: NaN,
        currency: Currency.BYN,
        country: Country.Belarus,
        city: 'minsk',
        username: 'admin',
        // eslint-disable-next-line max-len
        avatar: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
    },
    validateProfileErrors: [
        ValidateProfileError.INCORRECT_USER_DATA,
        ValidateProfileError.INCORRECT_AGE,
    ],
};

export const PrimaryWithLoading = Template.bind({});
PrimaryWithLoading.args = {
    isLoading: true,
};

export const PrimaryWithError = Template.bind({});
PrimaryWithError.args = {
    error: 'ERROR',
};
