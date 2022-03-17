import React from 'react';
import s from './Balance.module.css'
import {useSelector} from "react-redux";



function Balance(props) {
    const walletName = useSelector(state => state.walletName);

    return (
        <div className={s.container}>
            <div className={s.wallet}>{walletName}</div>
            <div className={s.balance}>$500</div>
        </div>
    );
}

export default Balance;
