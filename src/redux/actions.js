import {Types} from "./types";


export function changeType(valueType) {
    console.log(valueType);
    console.log('action up');
    return {
        type: Types.CHANGE_TYPE,
        payload: valueType
        }
}
export function changePeriod(period) {
    console.log(period);
    console.log('action up');
    return {
        type: Types.CHANGE_TYPE,
        payload: period
        }
}
export function changeDataDeposite(data) {
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
