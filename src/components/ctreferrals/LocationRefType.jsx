import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {DocumentTitle} from 'react-document-title';
import ActivityHoursMinutes from '../partials/ActivityHoursMinutes';
import ActivityStaffAndHours from '../partials/ActivityStaffAndHours';
const hosturl = "http://"+window.location.hostname + ":"+ window.location.port;
const backturl = hosturl + "/referraldetails";
const nextturl = hosturl + "/referraldetails";


class LocationRefType extends Component {

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
      document.title = "OAR - CT referral - Location and referral type"

      const regions = ['North', 'Central', 'Heathrow', 'South', 'South East & Europe'];
      const locations = ['Select:', 'Location1', 'Location2', 'Location3'];
      const area = ['Select:', 'area1', 'area2', 'area3' , 'area4'];
      const referraltype = ['Select:', 'Air passenger', 'Fast parcels and post', 
           'General aviation commodity' , 'General maritime commodity', 'General maritime passenger', 
           'Maritime container', 'Maritime passenger', ' Rail passenger', 'RoRo freight',
           'RoRo passenger', 'Air freight'];

      return (
        <div className="App">
          <div className="govuk-width-container">
          <div className="govuk-grid-row">

          <div className="govuk-grid-column-full">
          <a href={backturl} className="govuk-back-link">Back</a>
          <main role="main" id="govuk-width-container" className="govuk-width-container" lang="en">

          <p className="govuk-caption-xl"> CT referral </p>
          <span className="govuk-label--xl">Location and referral type</span>

  <div className="govuk-form-group govuk-!-padding-top-6">
  <fieldset className="govuk-fieldset" aria-describedby="" role="group">
  <label className="govuk-label" for="select-box">Date of referral </label>
    <span id="dob-hint" className="govuk-hint">
      For example, 31 3 1980
    </span>
    <div className="govuk-date-input" id="dob">
      <div className="govuk-date-input__item">
        <div className="govuk-form-group">
          <label className="govuk-label govuk-date-input__label" for="ctref-day-of-ref">
            Day
          </label>
          <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="ctref-day-of-ref" name="ctref-day-of-ref" type="number" pattern="[0-9]*"/>
        </div>
      </div>
      <div className="govuk-date-input__item">
        <div className="govuk-form-group">
          <label className="govuk-label govuk-date-input__label" for="ctref-month-of-ref">
            Month
          </label>
          <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="ctref-month-of-ref" name="ctref-month-of-ref" type="number" pattern="[0-9]*"/>
        </div>
      </div>
      <div className="govuk-date-input__item">
        <div className="govuk-form-group">
          <label className="govuk-label govuk-date-input__label" for="ctref-year-of-ref">
            Year
          </label>
          <input className="govuk-input govuk-date-input__input govuk-input--width-4" id="ctref-year-of-ref" name="ctref-year-of-ref" type="number" pattern="[0-9]*"/>
        </div>
      </div>
    </div>

    <p>
    <label className="govuk-label" for="select-box">Region of detection </label>
    <select className="govuk-select govuk-input--width-m" id="ctref-det-region" name="ctref-det-region" width="100%" >
    {this.populateDropdowns(regions)}
    </select>
    </p>

   <p>
    <label className="govuk-label" for="select-box">Location of detection </label>
    <select className="govuk-select govuk-input--width-m" id="ctref-det-location" name="ctref-det-location" width="100%" onChange={this.onChange.bind(this)} >
    {this.populateDropdowns(locations)}
    </select>
   </p>

   <p>
    <label className="govuk-label" for="select-box">Area of detection </label>
    <select className="govuk-select govuk-input--width-m" id="ctref-det-area" name="ctref-det-area" width="100%">
    {this.populateDropdowns(area)}
    </select>
   </p>

  <p>
    <label className="govuk-label" for="select-box">Referral type </label>
    <select className="govuk-select govuk-input--width-m" id="ctref-ref-type" name="ctref-ref-type" width="100%">
    {this.populateDropdowns(referraltype)}
    </select>
   </p>

<p>
   <table>
      <td className="govuk-!-padding-right-5 govuk-!-padding-top-4"> 
            <a href={nextturl} role="button"  id="ctref-location-type-continue" draggable="false" className="govuk-button">
            Continue
            </a>
      </td>
      <td className="table_td_text"> 
            <div className="govuk-label--s"><a href="http://localhost:4001/shiftdetails"  id="ctref-location-type-cancel">Cancel</a></div>
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
  
  export default LocationRefType