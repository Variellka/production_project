import Select from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string,
    value?: Country,
    readonly?: boolean,
    onChange?: (value: string) => void;
}

const CountrySelect = memo((props: CountrySelectProps) => {
    const { t } = useTranslation();
    const {
        className, value, readonly, onChange,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    const countryOptions = useMemo(() => (
        Object.entries(Country).map((item) => (
            { value: item[0], content: item[1] }
        ))
    ), []);

    return (
        <Select
            className={classNames('', {}, [className])}
            options={countryOptions}
            value={value}
            label={`${t('country')}:`}
            readonly={readonly}
            onChange={onChangeHandler}
        />
    );
});

export default CountrySelect;
