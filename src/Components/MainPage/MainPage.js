import React from 'react';
import Balance from "../Balance/Balance";
import Controls from "../Controls/Controls";
import TokenSection from "../TokenSection/TokenSection";
import s from './MainPage.module.css'

function MainPage(props) {
    return (
        <div className={s.container}>
            <Balance/>
            <Controls/>
            <TokenSection/>
        </div>
    );
}

export default MainPage;
