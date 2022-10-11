import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from './Input.module.scss'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputTextPropsType = DefaultInputPropsType & {
    onChangeValue?: (value: number) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
}

export const Input: React.FC<InputTextPropsType> = (
    {
        type,
        onChange,
        onChangeValue,
        onKeyPress,
        onEnter,
        error,
        className,
        spanClassName,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e)

        onChangeValue && onChangeValue(+e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        onEnter // если есть пропс onEnter
        && e.key === 'Enter'
        && onEnter()
    }

    const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`
    const finalInputClassName = `${className ? className : s.superInput}`

    return (
        <>
            <input
                type={'text'}
                onChange={onChangeCallback}
                onKeyDown={onKeyPressCallback}
                className={finalInputClassName}

                {...restProps}
            />
            {error && <span className={finalSpanClassName}>{error}</span>}
        </>
    )
}

