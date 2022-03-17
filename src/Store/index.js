import {configureStore} from "@reduxjs/toolkit";
import {WalletSlice} from "./Wallet";

export const store = configureStore({
    reducer: {
        wallet: WalletSlice
    }
})
