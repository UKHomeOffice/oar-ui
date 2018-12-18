import React, { Component } from 'react';
import {bindActionCreators} from "redux";
//import {DocumentTitle} from 'react-document-title';
import ActivityHoursMinutes from '../partials/ActivityHoursMinutes';
import ActivityStaffAndHours from '../partials/ActivityStaffAndHours';
const hosturl = "http://"+window.location.hostname + ":"+ window.location.port;
const backturl = hosturl + "/referraldetails";
const nextturl = hosturl + "/referraldetails";


class MaritimeContainer extends Component {

  componentWillMount() {
       this.state = {
        routerPath: '',
        //typed: '',
        //regionArr: ['Select:']
    }
  }

  populateDropdowns(arr) {
    const items = [];
    arr.forEach(function(item, index, array) {
      items.push(<option key={index} value={index}>{item}</option>);
    });
    return items;
  }

  getInitialState() {
    this.setState({
      //typed: '',
      //regionArr: ['Select:']
    });
    return {
      //typed: '',
      //regionArr: ['Select:']
    };
  }

  onChange(event) {
    this.setState({typed: event.target.value});
    //this.setState({regionArr: this.getNextArr(event.target.value)});
   }
  render() {
  document.title = "OAR - CT referral - Maritime container details"
  const countries = ['UK', 'USA', 'India', 'France', 'Canada', 'Sri Lanka', 'Mexico'];      

  return (
  <div className="App">
  <div className="govuk-width-container">
  <div className="govuk-grid-row">

  <div className="govuk-grid-column-full">
  <a href={backturl} className="govuk-back-link">Back</a>
  <main role="main" id="govuk-width-container" className="govuk-width-container" lang="en">

  <p className="govuk-caption-xl"> CT referral </p>
  <span className="govuk-label--xl">Maritime container details </span>

  <div className="govuk-form-group govuk-!-padding-top-6">
  <fieldset className="govuk-fieldset" aria-describedby="" role="group">

  <p>
    <label className="govuk-label" for="ctref-maritime-containernumber">Container number</label>
    <input className="govuk-input govuk-input--width-20" id="ctref-maritime-containernumber" type="text" name="ctref-maritime-containernumber"/>
  </p>
  
  <label className="govuk-label" for="ctref-maritime-ad">Arrival date </label>
    <span id="arrdate-hint" className="govuk-hint">
      For example, 31 3 1980
    </span>
    <div className="govuk-date-input" id="dot">
      <div className="govuk-date-input__item">
        <div className="govuk-form-group">
          <label className="govuk-label govuk-date-input__label" for="ctref-maritime-date-ad">
            Day
          </label>
          <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="ctref-maritime-date-ad" name="ctref-maritime-date-ad" type="number" pattern="[0-9]*"/>
        </div>
      </div>
      <div className="govuk-date-input__item">
        <div className="govuk-form-group">
          <label className="govuk-label govuk-date-input__label" for="ctref-maritime-month-ad">
            Month
          </label>
          <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="ctref-maritime-month-ad" name="ctref-maritime-month-ad" type="number" pattern="[0-9]*"/>
        </div>
      </div>
      <div className="govuk-date-input__item">
        <div className="govuk-form-group">
          <label className="govuk-label govuk-date-input__label" for="ctref-maritime-year-ad">
            Year
          </label>
          <input className="govuk-input govuk-date-input__input govuk-input--width-4" id="ctref-maritime-year-ad" name="ctref-maritime-year-ad" type="number" pattern="[0-9]*"/>
        </div>
      </div>
    </div>

    <p>
        <label className="govuk-label" for="ctref-maritime-carrier">Carrier</label>
        <input className="govuk-input govuk-input--width-20" id="ctref-maritime-carrier" type="text" name="ctref-maritime-carrier"/>
    </p>

    <p>
      <label className="govuk-label" for="ctref-maritime-srccountry">Source country</label>
      <select className="govuk-select govuk-input--width-m" id="ctref-maritime-srccountry" name="ctref-maritime-srccountry" width="100%" >
      {this.populateDropdowns(countries)}
      </select>
    </p>

    <p>
      <label className="govuk-label" for="ctref-maritime-destcountry">Destination country</label>
      <select className="govuk-select govuk-input--width-m" id="ctref-maritime-destcountry" name="ctref-maritime-destcountry" width="100%" >
      {this.populateDropdowns(countries)}
      </select>
    </p>

  <p>
      <label className="govuk-label" htmlFor="ctref-maritime-cargodesc">Cargo description </label>
      <textarea className="govuk-input textarea-height govuk-input--width-20" id="ctref-maritime-cargodesc" type="textarea" name="ctref-maritime-cargodesc">
      </textarea>
   </p>


  <p className="govuk-label--m">Consignee </p>

  <p>
      <label className="govuk-label" for="ctref-maritime-busname">Business name</label>
      <input className="govuk-input govuk-input--width-20" id="ctref-maritime-busname" type="text" name="ctref-maritime-busname"/>
  </p>

  <p>
      <label className="govuk-label" for="ctref-maritime-pcortown">Postcode or town</label>
      <input className="govuk-input govuk-input--width-20" id="ctref-maritime-pcortown" type="text" name="ctref-maritime-pcortown"/>
  </p>


  <p className="govuk-label--m">Consigner </p>

  <p>
      <label className="govuk-label" for="ctref-maritime-cnsnr-busname">Business name</label>
      <input className="govuk-input govuk-input--width-20" id="ctref-maritime-cnsnr-busname" type="text" name="ctref-maritime-cnsnr-busname"/>
  </p>

  <p>
      <label className="govuk-label" for="ctref-maritime-cnsnr-pcortown">Postcode or town</label>
      <input className="govuk-input govuk-input--width-20" id="ctref-maritime-cnsnr-pcortown" type="text" name="ctref-maritime-cnsnr-pcortown"/>
  </p>

<p className="govuk-label--m">Delivery </p>

  <p>
      <label className="govuk-label" htmlFor="ctref-maritime-deli-address">Address </label>
      <textarea className="govuk-input textarea-height govuk-input--width-20" id="ctref-maritime-deli-address" type="textarea" name="ctref-maritime-deli-address">
      </textarea>
   </p>

<p>
    <label className="govuk-label" for="ctref-maritime-deli-pcortown">Postcode or town</label>
    <input className="govuk-input govuk-input--width-20" id="ctref-maritime-deli-pcortown" type="text" name="ctref-maritime-deli-pcortown"/>
</p>


  <p>
    <table>
        <td className="govuk-!-padding-right-5 govuk-!-padding-top-4"> 
              <a href={nextturl} role="button"  id="ctref-maritime-continue" draggable="false" className="govuk-button">
              Continue
              </a>
        </td>
        <td className="table_td_text"> 
              <div className="govuk-label--s"><a href="http://localhost:4001/shiftdetails"  id="ctref-maritime-cancel">Cancel</a></div>
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
  
  export default MaritimeContainer