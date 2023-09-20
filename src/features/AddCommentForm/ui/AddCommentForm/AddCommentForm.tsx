import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Input from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormActions, addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { useSelector } from 'react-redux';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './AddCommentForm.module.scss';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/AddCommentFormSelectors';

interface AddCommentFormProps {
    className?: string,
    onSendComment: (text: string) => void
}

const initialReducers: ReducerList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = (props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const onChangeText = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHelper = useCallback(() => {
        onSendComment(text || '');
        onChangeText('');
    }, [onChangeText, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                {error && <Text text={error} theme={TextTheme.ERROR} />}
                <div className={cls.wrapper}>
                    <Input
                        placeholderInternal={t('add comment')}
                        className={cls.input}
                        onChange={onChangeText}
                        value={text}
                    />
                    <Button onClick={onSendHelper}>{t('send')}</Button>
                </div>
            </div>
        </DynamicModuleLoader>

    );
};

export default AddCommentForm;
