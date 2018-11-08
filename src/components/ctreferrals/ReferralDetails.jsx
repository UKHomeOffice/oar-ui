import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {DocumentTitle} from 'react-document-title';
import ActivityHoursMinutes from '../partials/ActivityHoursMinutes';
import ActivityStaffAndHours from '../partials/ActivityStaffAndHours';

class Addlindicator extends React.Component {
        constructor(props) {
          super(props);
        }
        render() {
          return (
          <div>
              <p>
                <label className="govuk-label" for="select-box">Additional indicator </label>
                <select className="govuk-select govuk-input--width-m" id="shift-location" name="select-box" width="100%">
                {this.props.populateDropdowns(this.props.indicators)}
                </select>
              </p>           
          </div>
          );
        }
}

class ReferralDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    isaddlindicator: false,
    };

  }
  
  componentWillMount() {
       this.state = {
        regionArr: ['Select:'],
        isaddlindicator: false,

    }
  }

  componentDidMount(){
    document.title = "OAR - Add Shift"
  }

  populateDropdowns(indicators) {
    console.log("dddddd===populateDropdowns:-" + indicators);

    const items = [];
    indicators.forEach(function(item, index, array) {
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
    this.render = this.render.bind(this)

    this.setState({
      regionArr: ['Select:'],
      isaddlindicator: false,

    });
    return {
      regionArr: ['Select:'],
      isaddlindicator: false,
    };
  }
  
  appendRow(e)
  {
    this.setState({
      isaddlindicator: true,
    });
  }


  onChange(event) {
    this.setState({regionArr: this.getNextArr(event.target.value)});
   }


  render() {
      const addlindicator1 = React.createElement(
        "P",
        React.createElement(
          "label",  
          { className : "govuk-label" },
          "Additional indicator"
        ),
        React.createElement(
            "select",
            {className : "govuk-select govuk-input--width-m"},
            {id : "shift-location"},
            {name : "select-box"},
            {width : "100%"},
            "{this.populateDropdowns(indicators)}"
        ),
   );
      
      
   document.title = "OAR - Add Shift"

      const indicators = ['Select:', '1 - Forged / Counterfeit documents', '2 - Fraudulently Obtained Genuine documents',
            '3 - Travel History' , '4 - Circuitous Routing', '5 - Length of time outside the UK', 
            '6 - Personal effects', '7 - Extremist literature / images / logos', 
            '8 - Downloaded or Commercial material relating to weaponry / explosives', 
            '9 - Hostile reconnaissance material', '10 - Undeclared cash', 
            '11 - Evidence of traumatic injury sustained in training / combat',
            '12 - Demeanour / Behavioural indicators – excessive nerves, profuse sweating, awareness of and corresponding reaction to the different roles of law',
            '13 - Previous military training', '14 - Claims of involvement or in support of violent extremist groups / terrorists',
            '15 - Last minute / cash paid ticketing', '16 - Firearms / firearms components / Offensive weapons',
            '17 - Suspect consignment including suspect IED / IED parts', '18 - Unaccompanied passports / identity cards',
            '19 - Military surplus (weapon scope, combat gear, first aid kits, camping equipment etc)', 
            '20 - Credit / Debit cards / any other monetary"', '21 - Passports / ID cards / other identity/legal documents',
            '22 - Undocumented / Clandestine arrival', '23 - Other', '24 - CT (SB) WICU hit'];
                        
      return (
        <div className="App">
          <div className="govuk-width-container">
          <div className="govuk-grid-row">

          <div className="govuk-grid-column-full">
          <a href="#" className="govuk-back-link">Back</a>
          <main role="main" id="govuk-width-container" className="govuk-width-container" lang="en">

          <p className="govuk-caption-xl"> CT referral </p>
          <span className="govuk-label--xl">Referral details</span>

  <div className="govuk-form-group">
  <fieldset className="govuk-fieldset" aria-describedby="dob-hint" role="group">

    <p>
        <label className="govuk-label" htmlFor="int-trade-check-nch-abandon">Referral officer name </label>
        <input className="govuk-input govuk-input--width-20" id="int-trade-check-nch-abandon" type="text" name="int-trade-check-nch-abandon"/>
    </p>

   <p>
    <label className="govuk-label" for="select-box">Primary indicator </label>
    <select className="govuk-select govuk-input--width-m" id="shift-region" name="select-box" width="100%" onChange={this.onChange.bind(this)} >
    {this.populateDropdowns(indicators)}
    </select>
   </p>

   <p>
    <label className="govuk-label" for="select-box">Additional indicator </label>
    <select className="govuk-select govuk-input--width-m" id="shift-location" name="select-box" width="100%">
    {this.populateDropdowns(indicators)}
    </select>
   </p>

    {this.state.isaddlindicator ? 
    <Addlindicator populateDropdowns={this.populateDropdowns} indicators={indicators} />
    :  null }

   <div class="govuk-label govuk-!-margin-left-3 govuk-!-display-inline" id="ctref-add-addl-indicators">
    <a href="#" className="govuk-label" onClick ={this.appendRow.bind(this)}> 
                + Add an additional indicator</a>
   </div>
   <p>
        <label className="govuk-label" htmlFor="int-trade-check-nch-abandon">Additional notes </label>
        <textarea className="govuk-input textarea-height govuk-input--width-20" id="int-trade-check-nch-abandon" type="textarea" name="int-trade-check-nch-abandon">
        </textarea>
   </p>

 <p>
 <label className="govuk-label" for="select-box"> Result of behavioural indicators training </label>
 <div className="govuk-radios govuk-radios--inline">
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="shift-type" name="changed-name" type="radio" value="yes"/>
        <label className="govuk-label govuk-radios__label" for="changed-name-1">
        Yes
        </label>
      </div>
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="shift-type" name="changed-name" type="radio" value="no"/>
        <label className="govuk-label govuk-radios__label" for="changed-name-2">
          No
        </label>
      </div>
 </div>
 </p>


<p>
   <table>
      <td className="govuk-!-padding-right-5 govuk-!-padding-top-4"> 
            <a href="http://localhost:4001/locationreftype" role="button"  id="ctreferral-referral-detail-button" draggable="false" className="govuk-button">
            Continue
            </a>
      </td>
      <td className="table_td_text"> 
            <div className="govuk-label--s"><a href="http://localhost:4001/shiftdetails"  id="ctreferral-referral-detail-cancel">Cancel</a></div>
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
  
  export default ReferralDetails