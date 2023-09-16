import { Image } from "antd";
import { Fade } from "react-awesome-reveal";

import Statistic from '../../components/Statistic/Statistic';
import Buy from "../../components/Buy/Buy";
import Sell from "../../components/Sell/Sell";
import Star from './assets/star.png';
import ChatCloud from './assets/reviews_silver.webp';

import styles from './MainPage.module.css';

const MainPage = () => {
    return (
        <div className={styles.root}>
            <Fade>
                <div className={styles.trade}>
                    <Buy />
                    <Sell />
                </div>
                <Statistic />
            </Fade>
            <img className={styles.star} src={Star} width={300} height={300} />
            <img className={styles.chatCloud} src={ChatCloud} width={120} height={120} />
        </div>
    );
};

export default MainPage;
