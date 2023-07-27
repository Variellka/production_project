import Select from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string,
    value?: Currency,
    readonly?: boolean,
    onChange?: (value: Currency) => void;
}

const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation();
    const {
        className, value, readonly, onChange,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    const currencyOptions = useMemo(() => (
        Object.entries(Currency).map((item) => (
            { value: item[0], content: item[1] }
        ))
    ), []);

    return (
        <Select
            className={classNames('', {}, [className])}
            options={currencyOptions}
            value={value}
            label={`${t('currency')}:`}
            readonly={readonly}
            onChange={onChangeHandler}
        />
    );
});

export default CurrencySelect;
