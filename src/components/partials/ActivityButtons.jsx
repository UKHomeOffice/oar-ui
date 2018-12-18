import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';

class ActivityHoursMinutes extends  React.Component {

  render() {
    return (  
        <div>
        <table>
          <td className="govuk-!-padding-right-9 govuk-!-padding-top-4"> 
          <a href="http://localhost:4001/shiftdetails" role="button" id="TBD-save-button" draggable="false" className="govuk-button">
          Save
          </a>
         </td>
          <td className="table_td_text"> 
          <div className="govuk-label--s"><a href="http://localhost:4001/shiftdetails"  id="TBD-canel" >Cancel</a></div>
           </td>
        </table>
        </div>
      );
    } 
  }

export default ActivityHoursMinutes