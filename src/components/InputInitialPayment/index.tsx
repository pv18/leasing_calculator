import React from 'react';
import {Input} from '../Input';
import {Slider} from '../Slider';
import s from './RangeInput.module.scss';
import {numberFormatter} from '../../utils/numberFormatter';

type RangeInputType2 = {
    titleLabel: string
    value: number
    onChange: (value:number) => void
    initialPayment: number
}

export const InputInitialPayment: React.FC<RangeInputType2> = (
    {
        titleLabel,
        value,
        onChange,
        initialPayment
    }) => {

    return (
        <div className={s.container}>
            <label>{titleLabel}</label>
            <Input value={numberFormatter(initialPayment)} onChangeValue={onChange}/>
            <div>
                {value}%
            </div>
            <Slider value={value} onChangeRange={onChange} min={10} max={60}/>
        </div>
    );
};

