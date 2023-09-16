import React, {useCallback, useState} from 'react';
import {Button, Input} from "antd";

import styles from './Sell.module.css';

const Sell = () => {
    const [idValue, setIdValue] = useState<number | undefined>(undefined);
    const [price, setPrice] = useState<number | undefined>(undefined);
    const [amount, setAmount] = useState<number | undefined>(undefined);

    const handlerChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setIdValue(Number(e.target.value))
    }, []);

    const handlerChangePrice = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(e.target.value))
    }, []);

    const handlerChangeAmount = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value))
    }, []);

    return (
        <div className={styles.root}>
            <Input value={idValue} placeholder='ID' type='number' onChange={handlerChangeId} />
            <Input value={price} placeholder='Цена за акцию' type='number' onChange={handlerChangePrice} />
            <Input value={amount} placeholder='Количество' type='number' onChange={handlerChangeAmount} />
            <Button className={styles.button} type='primary'>
                Продать акции
            </Button>
        </div>
    );
};

export default Sell;
