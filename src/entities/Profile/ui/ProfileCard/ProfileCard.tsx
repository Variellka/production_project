import { useTranslation } from 'react-i18next';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import { classNames } from 'shared/lib/classNames/classNames';
import Loader from 'shared/ui/Loader/Loader';
import { ProfileType } from 'entities/Profile/model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    data?: ProfileType,
    error?:string,
    isLoading?: boolean,
    readonly?: boolean,
    onChangeFirstname?: (value: string) => void,
    onChangeLastname?: (value: string) => void

}

const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        data, error, isLoading, readonly, onChangeFirstname, onChangeLastname,
    } = props;

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [])}>
                <Text text={error} theme={TextTheme.ERROR} align={TextAlign.CENTER} />
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
                <Input
                    value={data?.firstname}
                    placeholder={t('name:')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeFirstname}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('lastname:')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeLastname}
                />
                <Input
                    value={data?.age}
                    placeholder={t('age:')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeLastname}
                />
                <Input
                    value={data?.city}
                    placeholder={t('city:')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeLastname}
                />
                <Input
                    value={data?.country}
                    placeholder={t('country:')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeLastname}
                />
                <Input
                    value={data?.currency}
                    placeholder={t('currency:')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeLastname}
                />
            </div>
        </div>
    );
};

export default ProfileCard;
