import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {DocumentTitle} from 'react-document-title';
import ActivityHoursMinutes from '../partials/ActivityHoursMinutes';
import ActivityStaffAndHours from '../partials/ActivityStaffAndHours';
const hosturl = "http://"+window.location.hostname + ":"+ window.location.port;
const backturl = hosturl + "/referraldetails";
const nextturl = hosturl + "/referraldetails";


class PassengerDetails extends Component {

  componentWillMount() {
       this.state = {
        routerPath: '',
        typed: '',
        regionArr: ['Select:']
    }
  }

  componentDidMount(){
    document.title = "OAR - Add Shift"
  }

  populateDropdowns(arr) {
    console.log("dddddd===populateDropdowns:-" + arr);

    const items = [];
    arr.forEach(function(item, index, array) {
      items.push(<option key={index} value={index}>{item}</option>);
    });
    return items;
  }

  getNextArr(selector) {
    const l1_regions = [ 'L1 - North', 'L1 - Central', 'L1 - Heathrow', 'L1 - South', 'L1 - South East & Europe'];
    const l2_regions = [ 'L2 - North', 'L2 - Central', 'L2 - Heathrow', 'L2 - South', 'L2 - South East & Europe'];
    const l3_regions = [ 'L3 - North', 'L3 - Central', 'L3 - Heathrow', 'L3 - South', 'L3 -  South East & Europe'];

    //TODO:- HARDCODED -- REMOVE THIS WITH THE VALUES FROM DATABASE
    if(selector == 1) return l1_regions;
    if(selector == 2) return l2_regions;
    if(selector == 3) return l3_regions;
  }

  getInitialState() {
    this.setState({
      typed: '',
      regionArr: ['Select:']
    });
    return {
      typed: '',
      regionArr: ['Select:']
    };
  }

  onChange(event) {
    this.setState({typed: event.target.value});
    this.setState({regionArr: this.getNextArr(event.target.value)});
   }
     render() {
      document.title = "OAR - CT referral - Passenger details"

      const countries = ['UK', 'USA', 'India', 'France', 'Canada', 'Sri Lanka', 'Mexico'];
      const nationalities = ['UK', 'USA', 'India', 'France', 'Canada', 'Sri Lanka', 'Mexico'];
      
      
      return (
        <div className="App">
          <div className="govuk-width-container">
          <div className="govuk-grid-row">

          <div className="govuk-grid-column-full">
          <a href={backturl} className="govuk-back-link">Back</a>
          <main role="main" id="govuk-width-container" className="govuk-width-container" lang="en">

          <p className="govuk-caption-xl"> CT referral </p>
          <span className="govuk-label--xl">Passenger details</span>

  <div className="govuk-form-group govuk-!-padding-top-6">
  <fieldset className="govuk-fieldset" aria-describedby="" role="group">

  <p>
    <label className="govuk-label" for="select-box">Surname</label>
    <input className="govuk-input govuk-input--width-20" id="ctref-passenger-surname" type="text" name="ctref-passenger-surname"/>
  </p>
    
  <p>
    <label className="govuk-label" for="select-box">Forename</label>
    <input className="govuk-input govuk-input--width-20" id="ctref-passenger-forename" type="text" name="ctref-passenger-forename"/>
  </p>


  <label className="govuk-label" for="select-box">Date of birth </label>
  <span id="dob-hint" className="govuk-hint">
      For example, 31 3 1980
    </span>
    <div className="govuk-date-input" id="ctref-passenger-dob">
      <div className="govuk-date-input__item">
        <div className="govuk-form-group">
          <label className="govuk-label govuk-date-input__label" for="ctref-passenger-dob-day">
            Day
          </label>
          <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="ctref-passenger-dob-day" name="ctref-passenger-dob-day" type="number" pattern="[0-9]*"/>
        </div>
      </div>
      <div className="govuk-date-input__item">
        <div className="govuk-form-group">
          <label className="govuk-label govuk-date-input__label" for="ctref-passenger-dob-month">
            Month
          </label>
          <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="ctref-passenger-dob-month" name="ctref-passenger-dob-month" type="number" pattern="[0-9]*"/>
        </div>
      </div>
      <div className="govuk-date-input__item">
        <div className="govuk-form-group">
          <label className="govuk-label govuk-date-input__label" for="ctref-passenger-dob-year">
            Year
          </label>
          <input className="govuk-input govuk-date-input__input govuk-input--width-4" id="ctref-passenger-dob-year" name="ctref-passenger-dob-year" type="number" pattern="[0-9]*"/>
        </div>
      </div>
    </div>

<p>
<label className="govuk-label" for="select-box"> Gender</label>
 <div className="govuk-radios govuk-radios--inline">
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="ctref-passenger-gender-y"  name="ctref-passenger-gender" type="radio" value="yes"/>
        <label className="govuk-label govuk-radios__label" for="ctref-passenger-gender">
          Male
        </label>
      </div>
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="ctref-passenger-gender-n" name="ctref-passenger-gender" type="radio" value="no"/>
        <label className="govuk-label govuk-radios__label" for="ctref-passenger-gender">
          Female
        </label>
      </div>
 </div>
 </p>

<p>
<label className="govuk-label" for="select-box"> UK resident </label>
 <div className="govuk-radios govuk-radios--inline">
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="ctref-passenger-ukresident-y"  name="ctref-passenger-ukresident" type="radio" value="yes"/>
        <label className="govuk-label govuk-radios__label" for="ctref-passenger-ukresident">
          Yes
        </label>
      </div>
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="ctref-passenger-ukresident-n" name="ctref-passenger-ukresident" type="radio" value="no"/>
        <label className="govuk-label govuk-radios__label" for="ctref-passenger-ukresident">
          No
        </label>
      </div>
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="ctref-passenger-ukresident-un" name="ctref-passenger-ukresident" type="radio" value="no"/>
        <label className="govuk-label govuk-radios__label" for="ctref-passenger-ukresident">
          Unknown
        </label>
      </div>     
 </div>
 </p>



    <p>
    <label className="govuk-label" for="ctref-passenger-country">Country of birth</label>
    <select className="govuk-select govuk-input--width-m" id="ctref-passenger-country" name="ctref-passenger-country" width="100%" >
    {this.populateDropdowns(countries)}
    </select>
    </p>

   <p>
    <label className="govuk-label" for="ctref-passenger-nationality">Nationality </label>
    <select className="govuk-select govuk-input--width-m" id="ctref-passenger-nationality" name="ctref-passenger-nationality" width="100%" onChange={this.onChange.bind(this)} >
    {this.populateDropdowns(nationalities)}
    </select>
   </p>

<p>
<label className="govuk-label" for="ctref-passenger-forgery"> Forgery</label>
 <div className="govuk-radios govuk-radios--inline">
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="ctref-passenger-forgery-y"  name="ctref-passenger-forgery" type="radio" value="yes"/>
        <label className="govuk-label govuk-radios__label" for="ctref-passenger-forgery">
          Yes
        </label>
      </div>
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="ctref-passenger-forgery-n" name="ctref-passenger-forgery" type="radio" value="no"/>
        <label className="govuk-label govuk-radios__label" for="ctref-passenger-forgery">
          No
        </label>
      </div>
 </div>
 </p>

<p>
<label className="govuk-label" for="ctref-passenger-egates"> eGates interception</label>
 <div className="govuk-radios govuk-radios--inline">
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="ctref-passenger-egates-y"  name="ctref-passenger-egates" type="radio" value="yes"/>
        <label className="govuk-label govuk-radios__label" for="ctref-passenger-egates">
          Yes
        </label>
      </div>
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="ctref-passenger-egates-n" name="ctref-passenger-egates" type="radio" value="no"/>
        <label className="govuk-label govuk-radios__label" for="ctref-passenger-egates">
          No
        </label>
      </div>
 </div>
 </p>


   <p>
   <table>
      <td className="govuk-!-padding-right-5 govuk-!-padding-top-4"> 
            <a href={nextturl} role="button"  id="ctref-passenger-continue" draggable="false" className="govuk-button">
            Continue
            </a>
      </td>
      <td className="table_td_text"> 
            <div className="govuk-label--s"><a href="http://localhost:4001/shiftdetails"  id="ctref-passenger-cancel">Cancel</a></div>
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
  
  export default PassengerDetails