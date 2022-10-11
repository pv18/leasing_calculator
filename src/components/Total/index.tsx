import React from 'react';
import s from './Total.module.scss';
import {numberFormatter} from '../../utils/numberFormatter';

type TotalType = {
    titleLabel: string
    sum: number
}

export const Total: React.FC<TotalType> = ({titleLabel,sum}) => {
    return (
        <div className={s.total}>
            <label>{titleLabel}</label>
            <span>{numberFormatter(sum)} ₽</span>
        </div>
    );
};

