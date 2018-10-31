import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {DocumentTitle} from 'react-document-title';


class CreateShift extends Component {

  componentWillMount() {
       this.state = {
        routerPath: '',
        typed: '',
        regionArr: ['Select:']
    }
  }

  componentDidMount(){
    document.title = "TESTTEST  VENKATA 123"
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
      <DocumentTitle title='TESTVenkata' />
      const teams = ['Select:', 'DS0201 - Team1', 'DS0202 - Team2', 'DS0203 - Team3',];
      const locations = ['Select:', 'Location1', 'Location2', 'Location3'];
      //const regions = ['North', 'Central', 'Heathrow', 'South', 'South East & Europe'];
        
      return (
        <div className="App">
          <div className="govuk-width-container">
          <div className="govuk-grid-row">

          <div className="govuk-grid-column-full">
          <a href="#" className="govuk-back-link">Back</a>
          <main role="main" id="govuk-width-container" className="govuk-width-container" lang="en">

          <p className="govuk-label--xl">Add Shift</p>
          <p className="govuk-label--m"> Shift details</p>

  <div className="govuk-form-group">
  <fieldset className="govuk-fieldset" aria-describedby="dob-hint" role="group">
    <span id="dob-hint" className="govuk-hint">
      For example, 31 3 1980
    </span>
    <div className="govuk-date-input" id="dob">
      <div className="govuk-date-input__item">
        <div className="govuk-form-group">
          <label className="govuk-label govuk-date-input__label" for="dob-day">
            Day
          </label>
          <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="shift-day" name="dob-day" type="number" pattern="[0-9]*"/>
        </div>
      </div>
      <div className="govuk-date-input__item">
        <div className="govuk-form-group">
          <label className="govuk-label govuk-date-input__label" for="dob-month">
            Month
          </label>
          <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="shift-month" name="dob-month" type="number" pattern="[0-9]*"/>
        </div>
      </div>
      <div className="govuk-date-input__item">
        <div className="govuk-form-group">
          <label className="govuk-label govuk-date-input__label" for="dob-year">
            Year
          </label>
          <input className="govuk-input govuk-date-input__input govuk-input--width-4" id="shift-year" name="dob-year" type="number" pattern="[0-9]*"/>
        </div>
      </div>
    </div>

    <p>
    <label className="govuk-label" for="select-box">TeamID</label>
    <select className="govuk-select govuk-input--width-m" id="shift-teamid" name="select-box" width="100%" >
    {this.populateDropdowns(teams)}
    </select>
    </p>

   <p>
    <label className="govuk-label" for="select-box">Region</label>
    <select className="govuk-select govuk-input--width-m" id="shift-region" name="select-box" width="100%" onChange={this.onChange.bind(this)} >
    {this.populateDropdowns(locations)}
    </select>
   </p>

   <p>
    <label className="govuk-label" for="select-box">Location</label>
    <select className="govuk-select govuk-input--width-m" id="shift-location" name="select-box" width="100%">
    {this.populateDropdowns(this.state.regionArr)}
    </select>
   </p>




<p>
<label className="govuk-label" for="select-box"> Shift type </label>
 <div className="govuk-radios govuk-radios--inline">
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="shift-type" name="changed-name" type="radio" value="yes"/>
        <label className="govuk-label govuk-radios__label" for="changed-name-1">
        Early
        </label>
      </div>
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="shift-type" name="changed-name" type="radio" value="no"/>
        <label className="govuk-label govuk-radios__label" for="changed-name-2">
          Late
        </label>
      </div>
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="shift-type" name="changed-name" type="radio" value="no"/>
        <label className="govuk-label govuk-radios__label" for="changed-name-2">
          Night
        </label>
      </div>
 </div>
 </p>


   <p className="govuk-label--m"> Staff details</p>
<p> 
<label className="govuk-label--s govuk-!-padding-top-9" for="select-box">Border Force Higher Officers (BFHO)</label>
<div className="govuk-grid-row">
  <div className="govuk-grid-column-one-quarter">
  <label className="govuk-label" for="select-box">Number of officers</label>
  <input className="govuk-input govuk-input--width-5" id="shift-bfho" type="text" name="shift-bfho"/>
</div>

<div className="govuk-grid-column-one-quarter">
  <label className="govuk-label" for="select-box">Number of hours</label>
  <input className="govuk-input govuk-input--width-5" id="shift-bfho-hours" type="text" name="shift-bfho-hours"/>
</div>
</div>
</p>
<p>
<label className="govuk-label--s govuk-!-padding-top-9" for="select-box">Border Force Officers (BFO)</label>
<div className="govuk-grid-row">
  <div className="govuk-grid-column-one-quarter">
  <label className="govuk-label" for="select-box">Number of officers</label>
  <input className="govuk-input govuk-input--width-5" id="shift-bfo" type="text" name="shift-bfo"/>
</div>

<div className="govuk-grid-column-one-quarter">
  <label className="govuk-label" for="select-box">Number of hours</label>
  <input className="govuk-input govuk-input--width-5" id="shift-bfo-hours" type="text" name="shift-bfo-hours"/>
</div>
</div>
</p>
<p>
<label className="govuk-label--s govuk-!-padding-top-9" for="select-box">Border Force Assistant Officers (BFAO)</label>
<div className="govuk-grid-row">
  <div className="govuk-grid-column-one-quarter">
  <label className="govuk-label" for="select-box">Number of officers</label>
  <input className="govuk-input govuk-input--width-5" id="shift-bfao" type="text" name="shift-bfao"/>
</div>

<div className="govuk-grid-column-one-quarter">
  <label className="govuk-label" for="select-box">Number of hours</label>
  <input className="govuk-input govuk-input--width-5" id="shift-bfao-hours" type="text" name="shift-bfao-hours"/>
</div>
</div>
</p>
<p>
<label className="govuk-label--s govuk-!-padding-top-9" for="select-box">Administrative assistant</label>
<div className="govuk-grid-row">
  <div className="govuk-grid-column-one-quarter">
  <label className="govuk-label" for="select-box">Number of officers</label>
  <input className="govuk-input govuk-input--width-5" id="shift-aa" type="text" name="shift-aa"/>
</div>

<div className="govuk-grid-column-one-quarter">
  <label className="govuk-label" for="select-box">Number of hours</label>
  <input className="govuk-input govuk-input--width-5" id="shift-aa-hours" type="text" name="shift-aa-hours"/>
</div>
</div>
</p>
<p>
<label className="govuk-label--s govuk-!-padding-top-9" for="select-box">Seasonal or temporary workers</label>
<div className="govuk-grid-row">
  <div className="govuk-grid-column-one-quarter">
  <label className="govuk-label" for="select-box">Number of officers</label>
  <input className="govuk-input govuk-input--width-5" id="shift-temp" type="text" name="shift-temp"/>
</div>

<div className="govuk-grid-column-one-quarter">
  <label className="govuk-label" for="select-box">Number of hours</label>
  <input className="govuk-input govuk-input--width-5" id="shift-temp-hours" type="text" name="shift-temp-hours"/>
</div>
</div>
</p>

<p>
<div className="govuk-label--s govuk-!-padding-top-4" id="total-hours"> Total time for this shift: 24 hours </div>
</p>
{/* OVERRIDES:_ govuk-\!-font-size-36 */}

<p>
<div className="govuk-grid-row govuk-!-margin-top-9">
<div className="govuk-grid-column-one-quarter">
<a href="http://localhost:4001/oarhome" role="button" id="shift-submit" draggable="false" className="govuk-button">
 Save
</a>

</div>
<div className="govuk-grid-column-one-quarter govuk-!-margin-top-2">
<label className="govuk-label--s"><a href="#" id="shift-submit-cancel">Cancel</a></label>
</div>
</div>
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
  
  export default CreateShift