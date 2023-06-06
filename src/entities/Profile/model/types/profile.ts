import { Country, Currency } from 'shared/const/common';

export interface ProfileType {
    first: string,
    lastname: string,
    age: number,
    currency: Currency,
    country: Country,
    city: 'minsk',
    username: string,
    avatar: string
}

export interface ProfileSchema {
    data?: ProfileType,
    isLoading: boolean,
    error?: string,
    readonly: boolean
}
