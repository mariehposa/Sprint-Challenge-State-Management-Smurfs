import * as types from './actionTypes';

const initialValue = [];
export function smurfReducer (state = initialValue, action) {
    switch (action.type) {
        case types.ADD_SMURF:
            return
        default:
            return state;
    }
}