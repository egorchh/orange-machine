import React, { useCallback, useState } from 'react';
import {Fade, Slide} from "react-awesome-reveal";
import { Table, Button, Row, Col } from 'antd';

import styles from './Statistic.module.css';

const dataSource = [
    {
        key: '1',
        id: 1,
        price: 32,
        amount: 123,
        company: 'Company Ogurchiki'
    },
    {
        key: '2',
        id: 2,
        price: 42,
        amount: 9,
        company: 'Company Ogurchiki'
    },
    {
        key: '1',
        id: 1,
        price: 32,
        amount: 123,
        company: 'Company Ogurchiki'
    },
    {
        key: '2',
        id: 2,
        price: 42,
        amount: 9,
        company: 'Company Ogurchiki'
    },
    {
        key: '1',
        id: 1,
        price: 32,
        amount: 123,
        company: 'Company Ogurchiki'
    },
    {
        key: '2',
        id: 2,
        price: 42,
        amount: 9,
        company: 'Company Ogurchiki'
    },
    {
        key: '1',
        id: 1,
        price: 32,
        amount: 123,
        company: 'Company Ogurchiki'
    },
    {
        key: '2',
        id: 2,
        price: 42,
        amount: 9,
        company: 'Company Ogurchiki'
    },
    {
        key: '1',
        id: 1,
        price: 32,
        amount: 123,
        company: 'Company Ogurchiki'
    },
    {
        key: '2',
        id: 2,
        price: 42,
        amount: 9,
        company: 'Company Ogurchiki'
    },
    {
        key: '1',
        id: 1,
        price: 32,
        amount: 123,
        company: 'Company Ogurchiki'
    },
    {
        key: '2',
        id: 2,
        price: 42,
        amount: 9,
        company: 'Company Ogurchiki'
    },
    {
        key: '1',
        id: 1,
        price: 32,
        amount: 123,
        company: 'Company Ogurchiki'
    },
    {
        key: '2',
        id: 2,
        price: 42,
        amount: 9,
        company: 'Company Ogurchiki'
    },
    {
        key: '1',
        id: 1,
        price: 32,
        amount: 123,
        company: 'Company Ogurchiki'
    },
    {
        key: '2',
        id: 2,
        price: 42,
        amount: 9,
        company: 'Company Ogurchiki'
    },{
        key: '1',
        id: 1,
        price: 32,
        amount: 123,
        company: 'Company Ogurchiki'
    },
    {
        key: '2',
        id: 2,
        price: 42,
        amount: 9,
        company: 'Company Ogurchiki'
    },
    {
        key: '1',
        id: 1,
        price: 32,
        amount: 123,
        company: 'Company Ogurchiki'
    },
    {
        key: '2',
        id: 2,
        price: 42,
        amount: 9,
        company: 'Company Ogurchiki'
    },
    {
        key: '1',
        id: 1,
        price: 32,
        amount: 123,
        company: 'Company Ogurchiki'
    },
    {
        key: '2',
        id: 2,
        price: 42,
        amount: 9,
        company: 'Company Ogurchiki'
    },{
        key: '1',
        id: 1,
        price: 32,
        amount: 123,
        company: 'Company Ogurchiki'
    },
    {
        key: '2',
        id: 2,
        price: 42,
        amount: 9,
        company: 'Company Ogurchiki'
    },
    {
        key: '1',
        id: 1,
        price: 32,
        amount: 123,
        company: 'Company Ogurchiki'
    },
    {
        key: '2',
        id: 2,
        price: 42,
        amount: 9,
        company: 'Company Ogurchiki'
    },



];

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Цена',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Количество',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
        title: 'Компания',
        dataIndex: 'company',
        key: 'company',
    },
];

const Statistic = () => {
    const [open, setOpen] = useState(true);

    const toggleButtonState = useCallback(() => {
        setOpen(prevState => !prevState);
    }, [])

    return (
        <div className={styles.root}>
            <Button type={open ? "dashed" : 'primary'} size='middle' className={styles.button} onClick={toggleButtonState}>
                {open ? 'Скрыть информацию' : 'Информация о профиле'}
            </ Button>
                {open && (
                    <Fade>
                        <Row>
                            <Col span={6}>
                                <div className={styles.oranges}>
                                    There will be oranges
                                </div>
                            </Col>
                            <Col span={18}>
                                <Table dataSource={dataSource} columns={columns} pagination={false} scroll={{ y: 300 }} />
                            </Col>
                        </Row>
                    </Fade>
                )}
        </div>
    );
};

export default Statistic;
