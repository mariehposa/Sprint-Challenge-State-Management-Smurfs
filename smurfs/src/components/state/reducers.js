import * as types from './actionTypes';

const initialValue = [
    {
      name: "Brainey",
      age: 200,
      height: "5cm",
      id: 0
    }
  ];
export function smurfReducer (state = initialValue, action) {
    switch (action.type) {
        case types.ADD_SMURF:
            console.log(action.payload);
            const newSmurf = (action.payload)
            return [...state, newSmurf]
        default:
            return state;
    }
}