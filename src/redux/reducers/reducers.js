import {Types} from "../types";
import depcalc from '../../depcalc.json';

const initialStateType = {
    typeDeposit: 'unic'
};
const initialStateSum = {
    sum: 0
};
const initialStatePeriod = {
    period: []
};
const initialStateDataDeposit = {
    dataDeposit: depcalc
};
const initialStateProfit = {
    profit: 0
};

export const depositType = (state = initialStateType, action) => {
    switch (action.type) {
        case Types.CHANGE_TYPE: {
            let copiedState = state;
            copiedState.typeDeposit = action.payload;
            return {...copiedState};
        }
        default: return state;
    }
};
export const depositSum = (state = initialStateSum, action) => {
    switch (action.type) {
        case Types.CHANGE_SUM: {
            let copiedState = state;
            copiedState.sum = action.payload;
            return {...copiedState};
        }
        default: return state;
    }
};

export const depositProfit = (state = initialStateProfit, action) => {
    switch (action.type) {
        case Types.CHANGE_PROFIT: {
            let copiedState = state;
            copiedState.profit = (action.payload.sum / 100) * action.payload.rate;
            return {...copiedState};
        }
        default: return state;
    }
};

export const depositPeriod = (state = initialStatePeriod, action) => {
    switch (action.type) {
        case Types.CHANGE_PERIOD: {
            let copiedState = state;
            copiedState.period = action.payload;
            return {...copiedState};
        }
        default: return state;
    }
};

export const dataDeposit = (state = initialStateDataDeposit, action) => {
    switch (action.type) {
        case Types.CHANGE_DATA: {
            return {...state};
        }
        default: return state;
    }
};