import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';
import ActivityHoursMinutes from '../partials/ActivityHoursMinutes';
import ActivityButtons from '../partials/ActivityButtons';
import Searches from '../Shift/Searches';
import IntTradeCheck from '../Shift/IntTradeCheck';

const queryString = require('query-string');
const port = process.env.PORT || 4001;
const hosturl = "http://"+window.location.hostname + ":"+ window.location.port;
const backturl = hosturl + "/shiftdetails";
class Activity extends  React.Component {
 
  componentWillMount() {
    //this.changeRoute = this.changeRoute.bind(this);
    //const path = this.props.location.pathname;
    //console.log("-----------"+ this.props.location)
    //const parsed = queryString.parse(this.props.location.search);
    const qryObj1 = queryString.parse(location.search);
    console.log("=======" +  window.location.hostname);
    console.log("=======" +hosturl);
    //To be populated from RefData call
   

    console.log("2=======" + qryObj1.activity)
    
    //const qry = this.props.location.query.activity
    //console.log('11111======'+ path);
    //console.log('22222======'+ qry);
    //window.addEventListener('resize', this.handleWindowSizeChange);
    this.state = {
       // routerPath: path
    }
}

// componentDidMount(){
//     document.title = "OAR - Add Shift" + "oo"
//   }
  render() {
    const qryObj = queryString.parse(location.search);
const activityId = qryObj.activity
console.log("activityId=======" + activityId)

const activities = { 
  "pcp1" : "General PCP",
  "pcp2" : "Detention management",
  "pcp3" : "Immigration casework", 
  "pcp4" : "Other immigration", 
  "pcp5" : "CT referrals", 
  "pcp6" : "Safeguarding", 
  "pcp7" : "Forgery",

  "cst1" : "Red / Green channels details", 
  "cst2" : "International Trade check details",

  "sae1" : "Vehicles",
  "sae2" : "People",
  "sae3" : "Freight",
  "sae4" : "Aircraft",
  "sae5" : "Vessels",
  "sae6" : "Scans",

  "oth1" : "Cyclamen",
  "oth2" : "Management meetings",
  "oth3" : "Training",
  "oth4" : "Travel",
  "oth5" : "Intelligence collection and reporting",
  "oth6" : "Other operational activity",
  "oth7" : "Other non-operational activity"
}      

document.title = "OAR - Add Shift - " + activities[activityId];

  /* Use this code to remove boiler plate in each if-else */
  const backbuttonparttion = React.createElement(
    "div",
    React.createElement(
      "div",  
      { className : "govuk-width-container" },
      React.createElement(
        "div",
        {className : "govuk-grid-row"},
        React.createElement(
          "div",
          {className : "govuk-grid-column-full"},
          React.createElement(
            "a",
            {className : "govuk-back-link"},
            {href:"{hosturl}"},
            "Back"
          )
        )
      )
    )
  );

// console.log("1=======" + activities[activityId])
// console.log("1=======" + qryObj.block)


    if(qryObj.block == "pcp"){
        return (

            <div>
              <div className="govuk-width-container">
                <div className="govuk-grid-row">
                  <div className="govuk-grid-column-full">
                  <a href={backturl} className="govuk-back-link">Back </a>

                    <main role="main" id="govuk-width-container" className="govuk-width-container" lang="en">
                      <div className="app-content__header govuk-!-margin-top-5">
                      <h1 className="govuk-heading-xl"> {activities[activityId]} </h1>
                      </div>
                      <label className="govuk-label" htmlFor="select-box">Time spent</label>
                      <ActivityHoursMinutes/>
                      <ActivityButtons/>
                    </main>
                  </div>
                </div>
              </div>
            </div>
        );
      }
      else if(qryObj.block == "sae"){
        return (
          <div>
            <div className="govuk-width-container">
              <div className="govuk-grid-row">
                <div className="govuk-grid-column-full">
                <a href={backturl} className="govuk-back-link">Back </a>

                  <main role="main" id="govuk-width-container" className="govuk-width-container" lang="en">
                    <div className="app-content__header govuk-!-margin-top-5">
                    <h1 className="govuk-heading-xl"> {activities[activityId]} </h1>
                    </div>
                    <label className="govuk-label" htmlFor="select-box">Time spent</label>
                    <ActivityHoursMinutes/>
                    <Searches/>
                    <ActivityButtons/>
                  </main>
                </div>
              </div>
            </div>
          </div>
        );
      }

      else if(qryObj.block == "cst" && activityId == "cst1"){
        return (
          <div>
            <div className="govuk-width-container">
              <div className="govuk-grid-row">
                <div className="govuk-grid-column-full">
                <a href={backturl} className="govuk-back-link">Back </a>

                  <main role="main" id="govuk-width-container" className="govuk-width-container" lang="en">
                    <div className="app-content__header govuk-!-margin-top-5">
                    <h1 className="govuk-heading-xl"> {activities[activityId]} </h1>
                    </div>
                    <ActivityHoursMinutes/>
                    {/* if({activityId} == "cst2" ) ToDO:- Some how its not working*/} 
                    {/* <IntTradeCheck/> */}
                    <ActivityButtons/>
                  </main>
                </div>
              </div>
            </div>
          </div>
        );
      }

      else if(qryObj.block == "cst" && activityId == "cst2"){
        return (
          <div>
            <div className="govuk-width-container">
              <div className="govuk-grid-row">
                <div className="govuk-grid-column-full">
                <a href={backturl} className="govuk-back-link">Back </a>

                  <main role="main" id="govuk-width-container" className="govuk-width-container" lang="en">
                    <div className="app-content__header govuk-!-margin-top-5">
                    <h1 className="govuk-heading-xl"> {activities[activityId]} </h1>
                    </div>
                    <ActivityHoursMinutes/>
                    {/* if({activityId} == "cst2" ) */}
                    <IntTradeCheck/>
                    <ActivityButtons/>
                  </main>
                </div>
              </div>
            </div>
          </div>
        );
      }

      else if(qryObj.block == "oth"){
        return (
          <div>
            <div className="govuk-width-container">
              <div className="govuk-grid-row">
                <div className="govuk-grid-column-full">
                <a href={backturl} className="govuk-back-link">Back </a>

                  <main role="main" id="govuk-width-container" className="govuk-width-container" lang="en">
                    <div className="app-content__header govuk-!-margin-top-5">
                    <h1 className="govuk-heading-xl"> {activities[activityId]} </h1>
                    </div>
                    <ActivityHoursMinutes/>
                    <ActivityButtons/>
                  </main>
                </div>
              </div>
            </div>
          </div>
        );
      }      
      
    } 
  }


export default Activity