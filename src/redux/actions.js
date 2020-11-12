import {Types} from "./types";


export function changeType(valueType) {
    return {
        type: Types.CHANGE_TYPE,
        payload: valueType
        }
}
export function changePeriod(period) {
    return {
        type: Types.CHANGE_PERIOD,
        payload: period
        }
}
export function changeDataDeposit(data) {
    return {
        type: Types.CHANGE_DATA,
        payload: data
        }
}
export function changeSum(sum) {
    return {
        type: Types.CHANGE_SUM,
        payload: sum
        }
}
export function changeProfit(profit, sum) {
    return {
        type: Types.CHANGE_PROFIT,
        payload: {rate: profit, sum: sum}
        }
}


