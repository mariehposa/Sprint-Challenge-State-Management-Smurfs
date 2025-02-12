import axios from 'axios';
import * as types from './actionTypes';

const smurfApi = 'http://localhost:3333/smurfs'

export function addSmurf(smurfs) {
    //console.log('nonsense');

    return {
        type: types.ADD_SMURF,
        payload: smurfs,
    }
}

export const deleteSmurf = (id) => dispatch => {
    axios.delete(`${smurfApi}/${id}`)
        .then(res => {
            dispatch(addSmurf(res.data))
        })
}

export const getSmurf = () => dispatch => {
    //console.log('nonsense');
    
    axios.get(smurfApi)
        .then(res => {
            //console.log(res.data);
            dispatch(addSmurf(res.data));
        })
        .catch(err => {
            console.log(err.message)
        })
}

export const postSmurf = (smurfs) => dispatch => {
    axios.post(smurfApi, smurfs)
        .then((res) => {
            dispatch(addSmurf(res.data))
        })
}