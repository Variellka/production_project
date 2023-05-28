import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import Loader from 'shared/ui/Loader/Loader';
import { loginByUsername } from '../../model/services/loginByUserName/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className? : string
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.changeUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.changePassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text className={cls.title} title={t('Authorization')} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                placeholder={`${t('username')}:`}
                className={cls.input}
                autoFocus
                onChange={onChangeUserName}
                value={username}
            />
            <Input
                placeholder={`${t('password')}:`}
                className={cls.input}
                type="password"
                onChange={onChangePassword}
                value={password}
            />
            {isLoading && <Loader className={cls.loader} />}
            {!isLoading && (
                <Button
                    className={cls.button}
                    theme={ThemeButton.MODAL}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('log in')}
                </Button>
            )}
        </div>
    );
});

export default LoginForm;
