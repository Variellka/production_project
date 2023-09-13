import { useTranslation } from 'react-i18next';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import { classNames } from 'shared/lib/classNames/classNames';
import Loader from 'shared/ui/Loader/Loader';
import { Profile, ValidateProfileError } from 'entities/Profile/model/types/profile';
import Avatar from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    data?: Profile,
    error?:string,
    validateProfileErrors: ValidateProfileError[] | undefined,
    isLoading?: boolean,
    readonly?: boolean,
    onChangeFirstname?: (value: string) => void,
    onChangeLastname?: (value: string) => void,
    onChangeAge?: (value: number) => void,
    onChangeCity?: (value: string) => void,
    onChangeCountry?: (value: Country) => void,
    onChangeCurrency?: (value: Currency) => void,
    onChangeUsername?: (value: string) => void,
    onChangeAvatar?: (value: string) => void,
}

const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        data, error, isLoading, readonly, onChangeFirstname, onChangeLastname,
        onChangeAge, onChangeCity, onChangeCountry, onChangeCurrency, onChangeUsername, onChangeAvatar,
        validateProfileErrors,
    } = props;

    const validateErrorsTranslate = {
        [ValidateProfileError.INCORRECT_AGE]: t('INCORRECT_AGE'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('INCORRECT_USER_DATA'),
        [ValidateProfileError.NO_DATA]: t('NO_DATA'),
        [ValidateProfileError.SERVER_ERROR]: t('SERVER_ERROR'),
    };

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [])}>
                <Text
                    title={t('Something went wrong')}
                    text={t('try to reload page')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [cls.loading])}>
                <Loader />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [])}>
            <div className={cls.profileData}>
                <Avatar src={data?.avatar} size={120} className={cls.profileAvatar} />
                <div className={cls.validateErrorsWrapper}>
                    {validateProfileErrors?.length && validateProfileErrors.map((error) => (
                        <Text text={validateErrorsTranslate[error]} key={error} theme={TextTheme.ERROR} />
                    ))}
                </div>
                <Input
                    value={data?.username}
                    placeholder={`${t('username')}:`}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeUsername}
                />
                <Input
                    value={data?.firstname}
                    placeholder={`${t('name')}:`}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeFirstname}
                />
                <Input
                    value={data?.lastname}
                    placeholder={`${t('lastname')}:`}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeLastname}
                />
                <Input
                    value={data?.age}
                    placeholder={`${t('age')}:`}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeAge}
                    type="number"
                />
                <CountrySelect
                    value={data?.country}
                    readonly={readonly}
                    onChange={onChangeCountry}
                />
                <Input
                    value={data?.city}
                    placeholder={`${t('city')}:`}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeCity}
                />
                <Input
                    value={data?.avatar}
                    placeholder={`${t('avatar')}:`}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />
                <CurrencySelect
                    value={data?.currency}
                    readonly={readonly}
                    onChange={onChangeCurrency}
                />
            </div>
        </div>
    );
};

export default ProfileCard;
