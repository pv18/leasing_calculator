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

export const InputMonths: React.FC<RangeInputType> = (
    {
        titleLabel,
        value,
        onChange,
    }) => {
    return (
        <div className={s.container}>
            <label>{titleLabel}</label>
            <Input value={value} onChangeValue={onChange}/>
            <Slider value={value} onChangeRange={onChange} min={1} max={60}/>
        </div>
    );
};

