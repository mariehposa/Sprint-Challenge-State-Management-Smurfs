import React, {useEffect} from 'react';
import { connect } from "react-redux";
import SmurfCard from './SmurfCard';
import * as actionCreators from "../state/actionCreators";

export function SmurfList ({smurf, getSmurf}) {
    useEffect( () => {
        getSmurf()
    }, [])
    return (
        <div>
            {
                smurf.map(features => <SmurfCard key={features.id} smurv= {features} /> <button>Delete</button>)
            }
        </div>
    );
}

export default connect (
    state => state,
    actionCreators
)(SmurfList)