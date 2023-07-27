import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('', () => {
        const data = {
            firstname: '',
            lastname: '',
            age: NaN,
            currency: Currency.BYN,
            country: Country.Belarus,
            city: 'minsk',
            username: 'admin',
            // eslint-disable-next-line max-len
            avatar: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                profileData: data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
