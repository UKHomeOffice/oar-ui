import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';

class SearchesExamTypes extends  React.Component {

  render() {
    return (

        <div>

        <table>
        <tbody>
          <tr>
              <td><label className="govuk-label govuk-!-padding-right-9" htmlFor="hours">Hours</label> </td>
              <td><label className="govuk-label" htmlFor="minutes">Minutes</label> </td>
            </tr>
          <tr>
              <td> <input className="govuk-input govuk-input--width-4" id="hours-TBD" type="text" name="hours-TBD"/> </td>
              <td> 
                <select className="govuk-select govuk-input--width-s" id="minutes-TBD" name="minutes-TBD" width="100%" >
                <option>0</option>    
                <option>15</option>    
                <option>30</option>    
                <option>45</option>    
                </select>
              </td>
          </tr>
          <tr>
            <td><label className="govuk-label govuk-!-padding-right-9" for="searches_TBD_ecpositive">EC positive</label> </td>
            <td><label className="govuk-label" for="searches_TBD_ecnegative">EC negative</label> </td>
          </tr>
          <tr>
            <td> <input className="govuk-input govuk-input--width-4" id="searches_TBD_ecpositive" type="text" name="searches_TBD_ecpositive"/> </td>
            <td> <input className="govuk-input govuk-input--width-4" id="searches_TBD_ecnegative" type="text" name="searches_TBD_ecnegative"/> </td>
          </tr>

          <tr>
            <td><label className="govuk-label govuk-!-padding-right-9" for="searches_TBD_3cpositive">3C positive</label> </td>
            <td><label className="govuk-label" for="searches_TBD_3cnegative">3C negative</label> </td>
          </tr>
          <tr>
            <td> <input className="govuk-input govuk-input--width-4" id="searches_TBD_3cpositive" type="text" name="searches_TBD_3cpositive"/> </td>
            <td> <input className="govuk-input govuk-input--width-4" id="searches_TBD_3cnegative" type="text" name="searches_TBD_3cnegative"/> </td>
            </tr>

          </tbody>
        </table>
        </div>
      );
    } 
  }

export default SearchesExamTypes