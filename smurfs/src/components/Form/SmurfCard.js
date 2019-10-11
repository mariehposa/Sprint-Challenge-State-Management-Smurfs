import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from "../state/actionCreators";

export function SmurfCard ({smurf}) {
    return (
        <div>
            <h2>{smurf.name}</h2>
            <p>{smurf.height}</p>
            <dt>{smurf.age}</dt>
        </div>
    );
}

export default connect (
    state => state,
    actionCreators
)(SmurfCard)