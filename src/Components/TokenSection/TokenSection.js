import React from 'react';
import s from './TokenSection.module.css'
import TokenTab from "../TokenTab/TokenTab";
import {getTokenData} from "../../Utils/getTokenData";
import {useSelector} from "react-redux";


function getDailyChange() {
    return 10
}

function getExchangeRate() {
    return 12
}


function TokenSection(props) {
    const tokenList = useSelector(state => state.tokenList);

    return (
        <div className={s.container}>
            {tokenList.map((token) => <TokenTab token={token}/>)}
        </div>
    );
}

export default TokenSection;
