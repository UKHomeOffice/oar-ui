import React from 'react';
// import {connect} from "react-redux";
// import {withRouter} from 'react-router-dom'
// import LoadingBar from 'react-redux-loading-bar'
// import ResponsiveMenu from 'react-responsive-navbar';
// import * as errorActionTypes from '../error/actionTypes';
// import {bindActionCreators} from "redux";
// import PubSub from "pubsub-js";

class OarHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {location: 'Default - Dover'};
    }

    //Code to fetch the code from Postgrest
    // componentDidMount(){
    //     fetch("http://localhost:2000/shift").
    //     then(results => {
    //     //console.log("==11result===="+ results.json());
    //     return results.json()
    //     }).then(data => {
    //         console.log("==22result===="+ data.results);
    //         data.map(shift => {
    //             console.log("==44result===="+ shift.teamid + "==" + shift.region + "==" + shift.location );
    //             this.setState({location: shift.location})
    //          })
    //     })
    // }

    render() {
            document.title = "OAR - HOME"

    return <div className="App">
            <div className="govuk-width-container">
            <div className="grid-row">

            <div className="govuk-grid-column-full govuk-section-break--xl">
            <main role="main" id="govuk-width-container" className="govuk-width-container" lang="en">
                <p className="govuk-heading-xl">Operational activity reporting</p>

                <div className="govuk-label govuk-!-display-inline"> Signed in as</div>
                <div className="govuk-label--s govuk-!-display-inline"> Gillian Armstrong.</div>
                <div className="govuk-label govuk-!-margin-left-3 govuk-!-display-inline"><a href="http://localhost:4001/startpage">Sign out</a> </div>
                
                <div className="govuk-label  govuk-section-break--l">
                <p className="govuk-heading-l">Shifts</p> 
                </div>
            

                <p className="govuk-label--m"><a href="http://localhost:4001/shiftdetails">Wednesday 20 October 2018</a></p>
                <p className="govuk-label"> DS02F1 - Dover</p>
                <hr/>

                <p className="govuk-label--m"><a href="http://localhost:4001/shiftdetails">Wednesday 20 October 2018</a></p>
                <p className="govuk-label"> DS02F1 - {this.state.location}</p>

                <hr/>

                <a href="http://localhost:4001/createshift" role="button" id="addshift-button" draggable="false" className="govuk-button">
                Add shift
                </a>
            </main>

            </div>

            </div>
            </div>

    </div>
    }
}


export default OarHome