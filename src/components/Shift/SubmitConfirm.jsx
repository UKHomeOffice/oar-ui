import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const hosturl = "http://"+window.location.hostname + ":"+ window.location.port;
const activityturl = hosturl + "/activity";

class SubmitConfirm extends Component {
  makelink(section, row){
       return activityturl + '?activity=' + row + '&block=' + section;
  }
    render() {
     
      document.title = "OAR - Submit Confirm";

      return (
        <div>
          <div className="govuk-width-container">
          <div className="govuk-grid-row">

          <div className="govuk-grid-column-full">
          <a href="#" className="govuk-back-link">Back</a>
          
          <main role="main" id="govuk-width-container" className="govuk-width-container govuk-!-margin-top-5" lang="en">

          <div className="app-content__header">
          <h1 className="govuk-heading-xl"> Are you sure you want to submit this shift for reporting?  </h1>
          </div>

          <div className="govuk-form-group">
          <fieldset className="govuk-fieldset"  role="group">
         <label className="govuk-label" htmlFor="select-box">Thursday 21 October 2018</label>
         
         
         
         <div>
        <table>
          <td className="govuk-!-padding-right-9 govuk-!-padding-top-4"> 
          <a href="http://localhost:4001/submitconfirm" role="button" id="TBD-save-button" draggable="false" className="govuk-button">
          Submit shift for reporting
          </a>
         </td>
          <td className="table_td_text"> 
          <div className="govuk-label--s"><a href="http://localhost:4001/shiftdetails"  id="TBD-canel" >Cancel</a></div>
           </td>
        </table>
        </div>

  </fieldset>
   </div>
   </main>
   </div>
   </div>
   </div>
   </div>
        
      );
    }
  }
  
  export default SubmitConfirm