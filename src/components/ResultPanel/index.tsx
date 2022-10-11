import React, {useContext} from 'react';
import {Total} from '../Total';
import {Button} from '../Button';
import {CalculatorContext} from '../../context/CalculatorContext';

export const ResultPanel = () => {
    const {totalSum, monthlyPayment} = useContext(CalculatorContext)

    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Total titleLabel={'Сумма договора лизинга'} sum={totalSum}/>
            <Total titleLabel={'Ежемесячный платеж от'} sum={monthlyPayment}/>
            <Button>Оставить заявку</Button>
        </div>
    );
};

