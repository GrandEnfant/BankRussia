import {combineReducers} from "redux";
import {dataDeposit, depositPeriod, depositProfit, depositSum, depositType} from "./reducers";


export const rootReducer = combineReducers({
    typeDeposit: depositType,
    period: depositPeriod,
    dataDeposit: dataDeposit,
    sum: depositSum,
    profit: depositProfit
});
