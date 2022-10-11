import React from 'react';
import {Title} from '../Title';
import {Params} from '../Params';
import {ResultPanel} from '../ResultPanel';

export const Calculator = () => {
    return (
        <section>
            <Title>Рассчитайте стоимость автомобиля в лизинг</Title>
            <Params/>
            <ResultPanel/>
        </section>
    );
};

