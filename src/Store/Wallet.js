import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {tokenList} from "../Utils/tokenList";


export const WalletSlice = createSlice({
    name: "wallet",
    initialState: {
        walletName: "Main Wallet",
        balance: 0,
        tokens: tokenList
    },
    reducers:  {
        calculateBalance(state) {

}
    }
})
