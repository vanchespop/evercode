import axios from "axios";
import {getTokenListString} from "./tokenList";

const baseRequestUrl = 'https://min-api.cryptocompare.com/data/pricemultifull';
const fsyms = getTokenListString();
const tsyms = ['USD'].join('');

const requestConfig = {
    params: {
        fsyms,
        tsyms
    }
}

export const getTokenData = async () => {
    const {data: {RAW: result}} = await axios.get(baseRequestUrl, requestConfig)
    Object.keys(result)
}
