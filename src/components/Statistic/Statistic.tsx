// @ts-nocheck

import React, {useCallback, useEffect, useState} from 'react';
import {Fade, Slide} from "react-awesome-reveal";
import { Table, Button, Row, Col } from 'antd';

import styles from './Statistic.module.css';
import {TOKEN} from "../../constants";
import {InfoResponse} from "../../types";

const Statistic = () => {
    const [open, setOpen] = useState(true);

    const [data, setData] = useState<InfoResponse>(null);
    const [error, setError] = useState(true);

    // @ts-ignore
    const dataSource = [];
    const frozenSource = [];
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Количество',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Название компании',
            dataIndex: 'name',
            key: 'name',
        },
    ];

    if (data?.assets.length) {
        let perCompany = ''
        for (let i = 1; i <= data?.assets.length; i++) {
            const asset = data?.assets.filter(data => (data.quantity !== 0))[i]
            const id = asset?.id;
            const name = asset?.name;
            const quantity = asset?.quantity;

            const frozen = data.frozenAssets[i];
            const frozenId = frozen?.id;
            const frozeName = frozen?.name;
            const frozenQuantity = frozen?.quantity;

            if (perCompany !== name) {
                if (id && name && quantity) {
                    dataSource.push({
                        key: id || 0,
                        id,
                        name,
                        quantity
                    });
                }

                if (frozenId && frozeName && frozenQuantity) {
                    frozenSource.push({
                        key: id || 0,
                        id: frozenId,
                        name: frozeName,
                        quantity: frozenQuantity
                    });
                }
            }

            perCompany = name;
        }
    }

    useEffect(() => {
        setInterval(() => {
            fetch('https://datsorange.devteam.games/info', {
                headers: {
                    'Content-Type': 'application/json',
                    'token': TOKEN
                }
            })
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => setError(error.message));
        }, 2000);
    }, []);

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
                                    {data?.assets[0].name}: {data?.assets[0].quantity}
                                </div>
                            </Col>
                            <Col span={18} className={styles.tables}>
                                <div>
                                    <h3 className={styles.tableTitle}>Активы:</h3>
                                    <Table dataSource={dataSource.length ? dataSource : undefined} columns={columns} pagination={false} scroll={{ y: 200 }} />
                                </div>
                                <div>
                                    <h3 className={styles.tableTitle}>В заморозке:</h3>
                                    <Table dataSource={frozenSource.length ? frozenSource : undefined} columns={columns} pagination={false} scroll={{ y: 200 }} />
                                </div>
                            </Col>
                        </Row>
                    </Fade>
                )}
        </div>
    );
};

export default Statistic;
