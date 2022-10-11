import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './Slider.module.scss'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: number) => void
};

export const Slider: React.FC<SuperRangePropsType> = (
    {
        type,
        onChange,
        onChangeRange,
        className,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeRange && onChangeRange(+e.currentTarget.value)
    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <>
            <input
                type={'range'}
                onChange={onChangeCallback}
                className={finalRangeClassName}
                {...restProps}
            />
        </>
    )
}

