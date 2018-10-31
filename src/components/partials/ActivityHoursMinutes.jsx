import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';

class ActivityHoursMinutes extends  React.Component {

  render() {
    return (

        <div>

        <table>
          <tbody>
            <tr>
              <td><label className="govuk-label govuk-!-padding-right-9" htmlFor="select-box">Hours</label> </td>
              <td><label className="govuk-label" htmlFor="select-box">Minutes</label> </td>
            </tr>
            <tr>
              <td> <input className="govuk-input govuk-input--width-4" id="ni-number" type="text" name="ni-number"/> </td>
              <td> 
                <select className="govuk-select govuk-input--width-s" id="select-box" name="select-box" width="100%" >
                <option>0</option>    
                <option>15</option>    
                <option>30</option>    
                <option>45</option>    
                </select>
              </td>
            </tr>
           </tbody>
        </table>
        </div>
      );
    } 
  }

export default ActivityHoursMinutes