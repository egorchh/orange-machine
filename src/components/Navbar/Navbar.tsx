import {Image, Button, Tooltip} from 'antd'
import { LinkOutlined } from '@ant-design/icons';
import Logo from './assets/logo.svg';

import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.root}>
            <h1 className={styles.title}>Orange Machine</h1>
            <Tooltip placement='left' title='Посмотреть статистику по всем игрокам'>
                <Button
                    className={styles.button}
                    href='https://datsteam.dev/datsorange/scene/'
                    target='_blank'
                    type="primary"
                    shape='circle'
                    icon={<LinkOutlined />}
                    size='middle'
                />
            </Tooltip>
        </nav>
    );
};

export default Navbar;
