import {getRandomBalance} from "./getRandomBalance";

export const tokenList = [
    {
        name: "Bitcoin",
        ticker: "BTC",
        balance: getRandomBalance(5),
    },
    {
        name: "Ethereum",
        ticker: "ETH",
        balance: getRandomBalance(10),
    },
    {
        name: "Wax",
        ticker: "WAX",
        balance: getRandomBalance(20000),
    },
    {
        name: "BNB",
        ticker: "BNB",
        balance: getRandomBalance(25),
    },
    {
        name: "Dogecoin",
        ticker: "DOGE",
        balance: getRandomBalance(7000),
    },
];

export const getTokenListString = () => tokenList.map(token => token.ticker).join(',');
