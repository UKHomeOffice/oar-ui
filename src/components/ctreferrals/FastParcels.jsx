import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {DocumentTitle} from 'react-document-title';
import ActivityHoursMinutes from '../partials/ActivityHoursMinutes';
import ActivityStaffAndHours from '../partials/ActivityStaffAndHours';
const hosturl = "http://"+window.location.hostname + ":"+ window.location.port;
const backturl = hosturl + "/referraldetails";
const nextturl = hosturl + "/referraldetails";


class FastParcels extends Component { 

  
 render() {
 document.title = "OAR - CT referral - Fast parcels and post details"
      
 return (
  <div className="App">
  <div className="govuk-width-container">
  <div className="govuk-grid-row">
  <div className="govuk-grid-column-full">
  <a href={backturl} className="govuk-back-link">Back</a>
  <main role="main" id="govuk-width-container" className="govuk-width-container" lang="en">

  <p className="govuk-caption-xl"> CT referral </p>
  <span className="govuk-label--xl">Fast parcels and post details </span>

  <div className="govuk-form-group govuk-!-padding-top-6">
  <fieldset className="govuk-fieldset" aria-describedby="" role="group">

  <p className="govuk-label--m"> Consignee </p>

  <p>
    <label className="govuk-label" for="ctref-fpp-companyname">Business or company name</label>
    <input className="govuk-input govuk-input--width-20" id="ctref-fpp-companyname" type="text" name="ctref-fpp-companyname"/>
  </p>

  <p>
    <label className="govuk-label" for="ctref-fpp-surname">Surname</label>
    <input className="govuk-input govuk-input--width-20" id="ctref-fpp-surname" type="text" name="ctref-fpp-surname"/>
  </p>
    
  <p>
    <label className="govuk-label" for="ctref-fpp-forename">Forename</label>
    <input className="govuk-input govuk-input--width-20" id="ctref-fpp-forename" type="text" name="ctref-fpp-forename"/>
  </p>

  <p>
        <label className="govuk-label" htmlFor="ctref-fpp-address">Address </label>
        <textarea className="govuk-input textarea-height govuk-input--width-20" id="ctref-fpp-address" type="textarea" name="ctref-fpp-address">
        </textarea>
   </p>

  <p>
    <label className="govuk-label" for="ctref-fpp-postcode">Postcode</label>
    <input className="govuk-input govuk-input--width-20" id="ctref-fpp-postcode" type="text" name="ctref-fpp-postcode"/>
  </p>

    <p>
    <label className="govuk-label" for="ctref-fpp-telnumber">Telephone number</label>
    <input className="govuk-input govuk-input--width-20" id="ctref-fpp-telnumber" type="text" name="ctref-fpp-telnumber"/>
  </p>

  <p className="govuk-label--m"> Consigner </p>
  <p>
    <label className="govuk-label" for="ctref-fpp-csnr-companyname">Business or company name</label>
    <input className="govuk-input govuk-input--width-20" id="ctref-fpp-csnr-companyname" type="text" name="ctref-fpp-csnr-companyname"/>
  </p>


  <p>
    <label className="govuk-label" for="ctref-fpp-csnr-csnr-surname">Surname</label>
    <input className="govuk-input govuk-input--width-20" id="ctref-fpp-csnr-surname" type="text" name="ctref-fpp-csnr-surname"/>
  </p>
    
  <p>
    <label className="govuk-label" for="ctref-fpp-csnr-csnr-forename">Forename</label>
    <input className="govuk-input govuk-input--width-20" id="ctref-fpp-csnr-forename" type="text" name="ctref-fpp-csnr-forename"/>
  </p>

  <p>
        <label className="govuk-label" htmlFor="ctref-fpp-address">Address </label>
        <textarea className="govuk-input textarea-height govuk-input--width-20" id="ctref-fpp-csnr-address" type="textarea" name="ctref-fpp-csnr-address">
        </textarea>
   </p>

  <p>
    <label className="govuk-label" for="ctref-fpp-csnr-postcode">Postcode</label>
    <input className="govuk-input govuk-input--width-20" id="ctref-fpp-csnr-postcode" type="text" name="ctref-fpp-csnr-postcode"/>
  </p>

    <p>
    <label className="govuk-label" for="ctref-fpp-csnr-telnumber">Telephone number</label>
    <input className="govuk-input govuk-input--width-20" id="ctref-fpp-csnr-telnumber" type="text" name="ctref-fpp-csnr-telnumber"/>
  </p>

  <p>
    <table>
        <td className="govuk-!-padding-right-5 govuk-!-padding-top-4"> 
              <a href={nextturl} role="button"  id="ctref-fpp-continue" draggable="false" className="govuk-button">
              Continue
              </a>
        </td>
        <td className="table_td_text"> 
              <div className="govuk-label--s"><a href="http://localhost:4001/shiftdetails"  id="ctref-fpp-cancel">Cancel</a></div>
        </td>
    </table>
  </p>

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
  
  export default FastParcels