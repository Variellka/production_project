import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export interface ProfileType {
    firstname?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

export interface ProfileSchema {
    profileData?: ProfileType,
    profileForm?: ProfileType,
    isLoading: boolean,
    error?: string,
    readonly: boolean
}
