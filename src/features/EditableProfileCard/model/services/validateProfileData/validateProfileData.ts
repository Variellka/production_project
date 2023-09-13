import { Profile, ValidateProfileError } from 'entities/Profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const { firstname, lastname, age } = profile;
    const errors: ValidateProfileError[] = [];

    if (!firstname || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    return errors;
};
