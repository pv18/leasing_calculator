import React from 'react';
import {Input} from '../Input';
import {Slider} from '../Slider';
import s from './RangeInput.module.scss';
import {numberFormatter} from '../../utils/numberFormatter';

type RangeInputType = {
    titleLabel: string
    value: number
    onChange: (value:number) => void
}

export const InputPrice: React.FC<RangeInputType> = (
    {
        titleLabel,
        value,
        onChange,
    }) => {
    return (
        <div className={s.container}>
            <label>{titleLabel}</label>
            <Input value={numberFormatter(value)} onChangeValue={onChange}/>
            <Slider value={value} onChangeRange={onChange} min={1000000} max={6000000}/>
        </div>
    );
};

