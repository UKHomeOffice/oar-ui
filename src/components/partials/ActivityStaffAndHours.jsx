import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';

class ActivityStaffAndHours extends  React.Component {

  render() {
    
    const noofofficersref = 'number-of-officers-' + this.props.staff;
    const noofhoursref = 'number-of-hours-' + this.props.staff;

    return (

        <div>
          <table className="govuk-table oartable-s">
            <tbody>
              <tr>
                <td><label className="govuk-label govuk-!-padding-right-9" htmlFor="number-of-offices">Number of officers</label> </td>
                <td><label className="govuk-label" htmlFor="total-hours">Total hours worked</label> </td>
              </tr>
              <tr>
                <td> <input className="govuk-input govuk-input--width-4" id= {noofofficersref} type="text" name={noofofficersref}/> </td>
                <td> 
                <td> <input className="govuk-input govuk-input--width-4" id={noofhoursref} type="text" name={noofhoursref}/> </td>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } 
  }

export default ActivityStaffAndHours