import React from 'react';
import {callAPI} from '../services/APICallService';
import {shiftdetails, createshift, createshifturl} from '../index';

class OarHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            shiftdate: 'Default - Date',
            locationname: 'Default - Location',
            teamcode: 'Default - Team',
            location: 'Default - Dover'  };
    }

    //TODO:- Implement Store, Action, Reducers  fort he returned API results

    //Fetch the data from Postgrest// need to seperate out to a file later
    // componentDidMount(){
    //     console.log("==11result==aaa==");

    //     fetch("http://localhost:8080/api/translation/shifts").
    //     then(results => {
    //     console.log("==11result===="+ results);
    //     return results.json()
    //     }).then(data => {
    //         console.log("==22result===="+ data.results);
    //         data.map(shift => {
    //             console.log("==44result===="+ shift.teamid + "==" + shift.region + "==" + shift.location );
    //             this.setState({
    //                 shiftid: shift.shiftid,
    //                 startdatetime: shift.startdatetime,
    //                 teamcode: shift.teamcode,
    //                 locationname: shift.locationname,
    //                 })
    //          })
    //     })
    // }

    // {
    //     "countryid": "TW",
    //     "iso31661alpha3": "TWN",
    //     "name": "Taiwan",
    //     "continent": "AS",
    //     "dial": "886",
    //     "iso31661numeric": 158
    //     },
    //     {
        // async componentDidMount(){
        //     console.log("componentDidMount======")
        //     const url = `http://localhost:8080/api/translation/shifts`;
        //     const results = await callAPI(url, null);
        //    // console.log("==-------------results====" + results.length);
        //     results.map(data => {
        //      console.log("==22result===="+ data);
        //      this.state.countries.push(data)
        //  })
        //  this.setState({countries:this.state.countries});
       
        //  }

    render() {
            document.title = "OAR - HOME"

    return <div className="App">
            <div className="govuk-width-container">
            <div className="grid-row">

            <div className="govuk-grid-column-full govuk-section-break--xl">
            <main role="main" id="govuk-width-container" className="govuk-width-container" lang="en">
                <p className="govuk-heading-xl">Operational activity reporting</p>

                <div className="govuk-label govuk-!-display-inline"> Signed in as</div>
                
                {/* WIP : remove hardocding values */}
                <div className="govuk-label--s govuk-!-display-inline"> Gillian Armstrong.</div>
                <div className="govuk-label govuk-!-margin-left-3 govuk-!-display-inline"><a href="http://localhost:4001/startpage">Sign out</a> </div>
                
                <div className="govuk-label  govuk-section-break--l">
                <p className="govuk-heading-l">Shifts</p> 
                </div>
            
                {/* WIP : Need to loop with Shifts and display values
                Todo:- remove hard coding*/}
                <p className="govuk-label--m"><a href={shiftdetails}>Wednesday 20 October 2018</a></p>
                <p className="govuk-label"> DS02F1 - Dover</p>
                <hr/>

                <p className="govuk-label--m"><a href={shiftdetails}>Wednesday 20 October 2018</a></p>
                <p className="govuk-label"> DS02F1 - {this.state.location}</p>

                <hr/>

                <a href={createshifturl} role="button" id="addshift-button" draggable="false" className="govuk-button">
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