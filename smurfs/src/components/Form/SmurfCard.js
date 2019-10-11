import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from "../state/actionCreators";

export function SmurfCard ({smurv}) {
    return (
        <div>
            <h2>{smurv.name}</h2>
            <p>{smurv.height}</p>
            <dt>{smurv.age}</dt>
        </div>
    );
}

export default connect (
    state => state,
    actionCreators
)(SmurfCard)