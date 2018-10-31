import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';

class ActivityStaffAndHours extends  React.Component {

  render() {
    return (

        <div>
          <table className="govuk-table oartable-s">
            <tbody>
              <tr>
                <td><label className="govuk-label govuk-!-padding-right-9" htmlFor="number-of-offices">Number of officer</label> </td>
                <td><label className="govuk-label" htmlFor="total-hours">Total hours worked</label> </td>
              </tr>
              <tr>
                <td> <input className="govuk-input govuk-input--width-4" id="number-of-offices-TBD" type="text" name="number-of-offices-TBD"/> </td>
                <td> 
                <td> <input className="govuk-input govuk-input--width-4" id="total-hours-TBD" type="text" name="total-hours-TBD"/> </td>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } 
  }

export default ActivityStaffAndHours