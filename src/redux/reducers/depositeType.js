// import {fieldType, PayloadFieldType, Types} from "../types";
import {Types} from "../types";
import depcalc from '../../depcalc.json';

const initialStateType = {
    typeDeposite: 'unic'
};
const initialStateSum = {
    sum: 0
};
const initialStatePeriod = {
    period: []
};
const initialStateDataDeposite = {
    dataDeposite: depcalc
};
const initialStateProfit = {
    profit: 0
};

export const depositeType = (state = initialStateType, action) => {
    switch (action.type) {
        case Types.CHANGE_TYPE: {
            let copiedState = state;
            copiedState.typeDeposite = action.payload;
            return {...copiedState};
        }
        default: return state;
    }
};
export const depositeSum = (state = initialStateSum, action) => {
    switch (action.type) {
        case Types.CHANGE_SUM: {
            let copiedState = state;
            copiedState.sum = action.payload;
            return {...copiedState};
        }
        default: return state;
    }
};

export const depositeProfit = (state = initialStateProfit, action) => {
    switch (action.type) {
        case Types.CHANGE_PROFIT: {
            let copiedState = state;
            copiedState.profit = action.payload;
            return {...copiedState};
        }
        default: return state;
    }
};

export const depositePeriod = (state = initialStatePeriod, action) => {
    switch (action.type) {
        case Types.CHANGE_PERIOD: {
            let copiedState = state;
            copiedState.period = action.payload;
            return {...copiedState};
        }
        default: return state;
    }
};

export const dataDeposite = (state = initialStateDataDeposite, action) => {
    switch (action.type) {
        case Types.CHANGE_PERIOD: {
            return {...state};
        }
        default: return state;
    }
};