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
        firstname: 'xenia',
        lastname: 'levchenko',
        age: 28,
        currency: Currency.BYN,
        country: Country.Belarus,
        city: 'minsk',
        username: 'admin',
        // eslint-disable-next-line max-len
        avatar: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg',
    },
};

export const PrimaryWithValidateErrors = Template.bind({});
PrimaryWithValidateErrors.args = {
    data: {
        firstname: '',
        lastname: '',
        age: NaN,
        currency: Currency.BYN,
        country: Country.Belarus,
        city: 'minsk',
        username: 'admin',
        // eslint-disable-next-line max-len
        avatar: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg',
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
