import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';

const hosturl = "http://"+window.location.hostname + ":"+ window.location.port;
const backturl = hosturl + "/shiftdetails";

class CashDetections extends Component {
  
  componentWillMount() {
    this.state = {
     regionArr: ['Select:']
    }
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
   const teams = ['Select:', 'DS0201 - Team1', 'DS0202 - Team2', 'DS0203 - Team3',];
   const locations = ['Select:', 'Location1', 'Location2', 'Location3'];
   const regions = ['North', 'Central', 'Heathrow', 'South', 'South East & Europe'];
   const othercurrency = ['Select:', 'Option 1', 'Option 2', 'Option 3'];
   const currency = ['Select:', 'British Pound', 'Euro', 'USD'];
  
   document.title = "OAR - Cash detections"

   return (

    

      <div className="App">
      <div className="govuk-width-container">
      <div className="govuk-grid-row">

      <div className="govuk-grid-column-full">
      <a href={backturl} className="govuk-back-link" id="backlink">Back</a>

      <main role="main" id="govuk-width-container" className="govuk-width-container" lang="en">

      <div className="app-content__header govuk-!-margin-top-5">
      <span className="govuk-caption-xl"> Cash detection </span>
      <h1 className="govuk-heading-xl"> Detection details </h1>
      </div>
      
      <div className="govuk-form-group">
      <fieldset className="govuk-fieldset" aria-describedby="dob-hint" role="group">
      <label className="govuk-label" for="select-box">Date of detection</label>

      <span id="dob-hint" className="govuk-hint">
        For example, 31 3 1980
      </span>
      <div className="govuk-date-input" id="dob">
        <div className="govuk-date-input__item">
          <div className="govuk-form-group">
            <label className="govuk-label govuk-date-input__label" for="dob-day">
              Day
            </label>
            <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="cash-detect-day" name="cash-detect-day" type="number" pattern="[0-9]*"/>
          </div>
        </div>
        <div className="govuk-date-input__item">
          <div className="govuk-form-group">
            <label className="govuk-label govuk-date-input__label" for="dob-month">
              Month
            </label>
            <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="cash-detect-month" name="cash-detect-month" type="number" pattern="[0-9]*"/>
          </div>
        </div>
        <div className="govuk-date-input__item">
          <div className="govuk-form-group">
            <label className="govuk-label govuk-date-input__label" for="dob-year">
              Year
            </label>
            <input className="govuk-input govuk-date-input__input govuk-input--width-4" id="cash-detect-year" name="cash-detect-year" type="number" pattern="[0-9]*"/>
          </div>
        </div>
      </div>

      <p>
      <label className="govuk-label" for="select-box">Location of detection</label>
      <select className="govuk-select govuk-input--width-m" id="cash-detect-location" name="cash-detect-location" width="100%" >
      {this.populateDropdowns(locations)}
      </select>
      <br/>
      </p>

      <p>
      <label className="govuk-label" for="select-box">Location area</label>
      <select className="govuk-select govuk-input--width-m" id="cash-detect-location-area" name="cash-detect-location-areax" width="100%" onChange={this.onChange.bind(this)}>>
      {this.populateDropdowns(locations)}
      </select>
      </p>

      <p>
      <label className="govuk-label" for="select-box"> 5x5x5 referral</label>
      <div className="govuk-radios govuk-radios--inline">
            <div className="govuk-radios__item">
              <input className="govuk-radios__input" id="cash-detect-555ref-y" name="cash-detect-555ref" type="radio" value="yes"/>
              <label className="govuk-label govuk-radios__label" for="changed-name-1">
                Yes
              </label>
            </div>
            <div className="govuk-radios__item">
              <input className="govuk-radios__input" id="cash-detect-555ref-n" name="cash-detect-555ref" type="radio" value="no"/>
              <label className="govuk-label govuk-radios__label" for="changed-name-2">
                No
              </label>
            </div>
      </div>
      </p>

      <p>
      <label className="govuk-label" for="select-box"> Dog indication </label>
      <div className="govuk-radios govuk-radios--inline">
            <div className="govuk-radios__item">
              <input className="govuk-radios__input" id="cash-detect-dog-y" name="cash-detect-555ref-dog" type="radio" value="yes"/>
              <label className="govuk-label govuk-radios__label" for="changed-name-1">
                Yes
              </label>
            </div>
            <div className="govuk-radios__item">
              <input className="govuk-radios__input" id="cash-detect-555ref-dog-n" name="cash-detect-555ref-dog" type="radio" value="no"/>
              <label className="govuk-label govuk-radios__label" for="changed-name-2">
                No
              </label>
            </div>
      </div>
      </p>


    <span id="formofcurrency-conditional-hint" className="govuk-hint">
    Form of currency
    </span>
    <div className="govuk-radios govuk-radios--conditional" data-module="radios">

      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="cash-detect-cash" name="cash-detect-cash" type="radio" value="email" data-aria-controls="conditional-formofcurrency-conditional-1"/>
        <label className="govuk-label govuk-radios__label" for="formofcurrency-conditional-1">
        Cash
        </label>
      </div>
    <div className="govuk-radios govuk-radios--conditional" data-module="radios">
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="cash-detect-cash" name="cash-detect-cash" type="radio" value="email" data-aria-controls="conditional-formofcurrency-conditional-1" aria-expanded="false"/>
        <label className="govuk-label govuk-radios__label" for="formofcurrency-conditional-1">
          Other
        </label>
      </div>
      <div className="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-formofcurrency-conditional-1">
        <div className="govuk-form-group">
          <label className="govuk-label" for="contact-by-email">
          Other form of currency
          </label>
          <select className="govuk-select govuk-input--width-m" id="cash-detect-otherformcash" name="cash-detect-otherformcash" width="100%" onChange={this.onChange.bind(this)}>>
          {this.populateDropdowns(othercurrency)}
          </select>
        </div>
      </div>
      <div className="govuk-form-group">
          <label className="govuk-label" for="contact-by-email">
          Currency
          </label>
          <select className="govuk-select govuk-input--width-m" id="cash-detect-currency" name="cash-detect-currency" width="100%" onChange={this.onChange.bind(this)}>>
          {this.populateDropdowns(currency)}
          </select>
      </div>
    
    <div className="govuk-form-group">
    <label className="govuk-label" for="select-box">Amount</label>
    <span id="dob-hint" className="govuk-hint">
    In the selected currency and must not include pence or cents. For example, 12000
    </span>
    <input className="govuk-input govuk-input--width-20" id="cash-detect-amount" type="text" name="cash-detect-amount"/>
    </div>   


    <div className="govuk-form-group">
    <label className="govuk-label" for="select-box">Agency detection was referred to
    </label>
    <div className="govuk-checkboxes">
      <div className="govuk-checkboxes__item">
        <input className="govuk-checkboxes__input" id="cash-detect-charity" name="cash-detect-charity" type="checkbox" value="carcasses"/>
        <label className="govuk-label govuk-checkboxes__label" for="waste-1">
        Charity Commission
        </label>
      </div>
      <div className="govuk-checkboxes__item">
        <input className="govuk-checkboxes__input" id="cash-detect-dwp" name="cash-detect-dwp" type="checkbox" value="mines"/>
        <label className="govuk-label govuk-checkboxes__label" for="waste-2">
        DWP
        </label>
      </div>
      <div className="govuk-checkboxes__item">
        <input className="govuk-checkboxes__input" id="cash-detect-hmrc" name="cash-detect-hmrc" type="checkbox" value="farm"/>
        <label className="govuk-label govuk-checkboxes__label" for="waste-3">
        HMRC
        </label>
      </div>


     <div className="govuk-checkboxes__item">
        <input className="govuk-checkboxes__input" id="cash-detect-nca" name="cash-detect-nca" type="checkbox" value="mines"/>
        <label className="govuk-label govuk-checkboxes__label" for="waste-2">
        NCA
        </label>
      </div>
      <div className="govuk-checkboxes__item">
        <input className="govuk-checkboxes__input" id="cash-detect-police" name="cash-detect-police" type="checkbox" value="farm"/>
        <label className="govuk-label govuk-checkboxes__label" for="waste-3">
        Police / Special Branch
        </label>
      </div>
 <div className="govuk-radios govuk-radios--conditional" data-module="radios">
      <div className="govuk-radios__item">
      <input className="govuk-radios__input" id="cash-detect-other" name="cash-detect-other" type="radio" value="email" data-aria-controls="other-agency"/>
        <label className="govuk-label govuk-radios__label" for="how-contacted-conditional-1">
          Other
        </label>
      </div>
      <div className="govuk-radios__conditional govuk-radios__conditional--hidden" id="other-agency">
        <div className="govuk-form-group">
          <label className="govuk-label" for="contact-by-email">
          Agency
          </label>
          <select className="govuk-select govuk-input--width-m" id="cash-detect-agency" name="cash-detect-agency" width="100%" onChange={this.onChange.bind(this)}>>
          {this.populateDropdowns(othercurrency)}
          </select>
        </div>
        </div>
        </div>


<p>
<label className="govuk-label" for="select-box"> Seized</label>
 <div className="govuk-radios govuk-radios--inline">
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="cash-detect-seized-y" name="cash-detect-seized" type="radio" value="yes"/>
        <label className="govuk-label govuk-radios__label" for="changed-name-1">
          Yes
        </label>
      </div>
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="cash-detect-seized-n" name="cash-detect-seized" type="radio" value="no"/>
        <label className="govuk-label govuk-radios__label" for="changed-name-2">
          No
        </label>
      </div>
 </div>
 </p>


    </div>

    </div>   

    </div>
   


      </div>



      

{/* OVERRIDES:_ govuk-\!-font-size-36 */}

<p>
<div className="govuk-grid-row govuk-!-margin-top-9">
<div className="govuk-grid-column-one-quarter">
<a href="http://localhost:4001/agencydetails" id="cash-detection-continue" role="button" draggable="false" className="govuk-button">
  Continue
</a>

</div>
<div className="govuk-grid-column-one-quarter govuk-!-margin-top-2">
<label className="govuk-label--s"><a href="#" id="cash-detection-cancel">Cancel</a></label>
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

export default CashDetections