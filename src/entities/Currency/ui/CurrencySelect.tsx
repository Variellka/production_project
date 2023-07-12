import Select from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback } from 'react';
import { Currency } from '../model/types/currency';

interface CurrencySelectProps {
    className?: string,
    value?: Currency,
    readonly?: boolean,
    onChange?: (value: string) => void;
}

const options = [
    { value: Currency.BYN, content: Currency.BYN },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

const CurrencySelect = (props: CurrencySelectProps) => {
    const { t } = useTranslation();
    const {
        className, value, readonly, onChange,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            options={options}
            value={value}
            label={`${t('currency')}:`}
            readonly={readonly}
            onChange={onChangeHandler}
        />
    );
};

export default CurrencySelect;
