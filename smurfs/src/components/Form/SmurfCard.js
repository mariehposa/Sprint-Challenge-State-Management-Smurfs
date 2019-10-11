import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from "../state/actionCreators";

export function SmurfCard ({smurv, deleteSmurf}) {
    return (
        <div>
            <h2>{smurv.name}</h2>
            <p>{smurv.height}</p>
            <dt>{smurv.age}</dt>
            <button style={{backgroundColor: 'red'}} onClick ={ () => deleteSmurf(smurv.id) }>Delete</button>
        </div>
    );
}

export default connect (
    state => state,
    actionCreators
)(SmurfCard)