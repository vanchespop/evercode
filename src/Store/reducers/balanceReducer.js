const defaultState = {
    balance: 511,
}
export const balanceReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "UPDATE_BALANCE":
            return {...state, balance: action.payload}
        default:
            return state
    }
};
