import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/MainPage/MainPage";

import styles from './App.module.css';

function App() {
    return (
        <div className={styles.app}>
            <Navbar />
            <MainPage />
        </div>
    );
}

export default App;
