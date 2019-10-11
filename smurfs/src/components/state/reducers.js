import * as types from './actionTypes';

export function smurfReducer (state = [], action) {
    switch (action.type) {
        case types.ADD_SMURF:
            //console.log(action.payload);
            const newSmurf = (action.payload)
            return [...newSmurf]
        // case types.REMOVE_SMURF:
        //     const smurfClickedOn  = action.payload.;
        //     return
        default:
            return state;
    }
}