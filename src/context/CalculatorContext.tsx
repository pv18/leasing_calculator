import React, {createContext, useEffect, useState} from 'react';
import {getMonthPay} from '../utils/getMonthPay';

type CalculatorContextType = {
    price: number
    initialPayment: number
    initialPaymentPercent: number
    months: number
    rate: number
    monthlyPayment: number
    totalSum: number
    setPrice: (value: number) => void
    setInitialPayment: (value: number) => void
    setInitialPaymentPercent: (value: number) => void
    setMonths: (value: number) => void
    setMonthlyPayment: (value: number) => void
    setTotalSum: (value: number) => void
}

export const CalculatorContext = createContext<Required<CalculatorContextType>>({} as CalculatorContextType)

type CalculatorProviderType = {
    children: React.ReactNode
}

export const CalculatorProvider: React.FC<CalculatorProviderType> = ({children}) => {
    const [price, setPrice] = useState(3300000);
    const [initialPayment, setInitialPayment] = useState(0);
    const [initialPaymentPercent, setInitialPaymentPercent] = useState(13);
    const [months, setMonths] = useState(60);
    const [rate, setRate] = useState(0.035);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [totalSum, setTotalSum] = useState(0);

    useEffect(() => {
        setInitialPayment(initialPaymentPercent * price / 100)
    }, [initialPaymentPercent])

    useEffect(() => {
        setMonthlyPayment(getMonthPay(price, initialPaymentPercent, rate, months))
    }, [price, initialPaymentPercent, months]);

    useEffect(() => {
        setTotalSum(initialPaymentPercent + months * monthlyPayment)
    }, [initialPaymentPercent, months, monthlyPayment]);

    return (
        <CalculatorContext.Provider
            value={{
                price,
                initialPayment,
                initialPaymentPercent,
                months,
                rate,
                monthlyPayment,
                totalSum,
                setPrice,
                setInitialPayment,
                setInitialPaymentPercent,
                setMonths,
                setMonthlyPayment,
                setTotalSum
            }}
        >
            {children}
        </CalculatorContext.Provider>
    );
};

