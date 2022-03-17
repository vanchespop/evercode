import React from 'react';
import s from './TokenTab.module.css'
import cn from 'classnames'
import TokenIcon from "../TokenIcon/TokenIcon";

function calculateUsdValue(balance, rate) {
    return (balance * rate).toFixed(4);
}

function TokenTab(props) {
    const {name, ticker, balance, dailyChange, exchangeRate} = props.token;

    const dailyChangeStyle = cn(s.daily,
        {
            [s.positive]: dailyChange > 0,
            [s.negative]: dailyChange < 0,
        });

    return (
        <div className={s.container}>
            <TokenIcon size="big" token={ticker.toLowerCase()}/>
            <div className={s.info}>
                <p>{name}</p>
                <div className={s.secondary}>
                    <p className={s.rate}>
                        {exchangeRate}
                    </p>
                    <p className={dailyChangeStyle}>
                        {dailyChange}
                    </p>
                </div>
            </div>
            <div className={s.balance}>
                <p>{balance} {ticker}</p>
                <div className={s.secondary}>
                    ${calculateUsdValue(balance, exchangeRate)}
                </div>
            </div>
        </div>
    );
}

export default TokenTab;
