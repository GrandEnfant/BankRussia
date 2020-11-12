import {combineReducers} from "redux";
import {dataDeposite, depositePeriod, depositeSum, depositeType} from "./depositeType";


export const rootReducer = combineReducers({
    typeDeposite: depositeType,
    period: depositePeriod,
    dataDeposite: dataDeposite,
    sum: depositeSum
    // player: playerReducer,
});
