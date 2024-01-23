import { ChangeEvent, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T,
    content: string
}

interface SelectProps<T extends string> {
    className? : string,
    options?: SelectOption<T>[],
    label?: string,
    value?: T,
    onChange?: (value: T) => void;
    readonly?: boolean
}

const Select = <T extends string>(props : SelectProps<T>) => {
    const {
        className, options, label, value, onChange, readonly = true,
    } = props;

    const onchangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    return (
        <div className={classNames(cls.selectWrapper, {}, [className])}>
            <span className={cls.label}>{label}</span>
            <select value={value} className={cls.select} onChange={onchangeHandler} disabled={readonly}>
                {optionsList}
            </select>
        </div>
    );
};

export default Select;
