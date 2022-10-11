import React, {useContext} from 'react';
import {InputPrice} from '../InputPrice';
import {InputInitialPayment} from '../InputInitialPayment';
import {InputMonths} from '../InputMonths';
import {CalculatorContext} from '../../context/CalculatorContext';

export const Params = () => {
    const {
        price,
        setPrice,
        initialPaymentPercent,
        setInitialPaymentPercent,
        initialPayment,
        months,
        setMonths
    } = useContext(CalculatorContext)

    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <InputPrice
                titleLabel={'Стоимость автомобиля'}
                value={price}
                onChange={setPrice}
            />
            <InputInitialPayment
                titleLabel={'Первоначальный взнос'}
                value={initialPaymentPercent}
                onChange={setInitialPaymentPercent}
                initialPayment={initialPayment}
            />
            <InputMonths
                titleLabel={'Срок лизинга'}
                value={months}
                onChange={setMonths}
            />
        </div>
    );
};

