import { useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface SelectOption {
    value: string,
    content: string
}

interface SelectProps {
    className? : string,
    options?: SelectOption[],
    label?: string,
    value?: string
}

const Select = (props : SelectProps) => {
    const {
        className, options, label, value,
    } = props;

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
            <select value={value} className={cls.select}>
                {optionsList}
            </select>
        </div>
    );
};

export default Select;
