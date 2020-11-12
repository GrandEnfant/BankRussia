import {combineReducers} from "redux";
import {dataDeposite, depositePeriod, depositeProfit, depositeSum, depositeType} from "./depositeType";


export const rootReducer = combineReducers({
    typeDeposite: depositeType,
    period: depositePeriod,
    dataDeposite: dataDeposite,
    sum: depositeSum,
    profit: depositeProfit
});
