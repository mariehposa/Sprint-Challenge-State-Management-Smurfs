import React from 'react';
import { connect } from "react-redux";
import SmurfCard from './SmurfCard';
import * as actionCreators from "../state/actionCreators";

export function SmurfList ({smurf}) {
    return (
        <div>
            {
                smurf.map(features => <SmurfCard key={features.id} smurf= {features} />)
            }
        </div>
    );
}

export default connect (
    state => state,
    actionCreators
)(SmurfList)