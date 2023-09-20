import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import Loader from 'shared/ui/Loader/Loader';
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUserName/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className? : string
}

const initialReducers = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

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
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text className={cls.title} title={t('authorization')} />
                {error && <Text text={error} theme={TextTheme.ERROR} />}
                <Input
                    placeholderExternal={`${t('username')}:`}
                    className={cls.input}
                    autoFocus
                    onChange={onChangeUserName}
                    value={username}
                />
                <Input
                    placeholderExternal={`${t('password')}:`}
                    className={cls.input}
                    type="password"
                    onChange={onChangePassword}
                    value={password}
                />
                {isLoading && <Loader className={cls.loader} />}
                {!isLoading && (
                    <Button
                        className={cls.button}
                        theme={ThemeButton.FILLED}
                        onClick={onLoginClick}
                        disabled={isLoading}
                    >
                        {t('log in')}
                    </Button>
                )}
            </div>
        </DynamicModuleLoader>

    );
});

export default LoginForm;
