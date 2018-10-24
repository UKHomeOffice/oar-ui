import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';
import 'govuk-frontend/all.scss';
import { Tabs } from 'govuk-frontend';
// const GOVUKFrontend = require('govuk-frontend')
// GOVUKFrontend.initAll()
import { initAll } from 'govuk-frontend';
initAll()

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

 onClickFunc() {
 alert("=======" );
   //var elemnt = document.getElementById("other-agency");
  // alert("=======" + elemnt.id);
  // alert("=======" + elemnt.style.display);

 /// x.style.display = 'block';
//elemnt.classList.add('is-visible');
//  this.setState({typed: event.target.value});
//  this.setState({regionArr: this.getNextArr(event.target.value)});
}


  render() {
   const teams = ['Select:', 'DS0201 - Team1', 'DS0202 - Team2', 'DS0203 - Team3',];
   const locations = ['Select:', 'Location1', 'Location2', 'Location3'];
   const regions = ['North', 'Central', 'Heathrow', 'South', 'South East & Europe'];
   const othercurrency = ['Select:', 'Option 1', 'Option 2', 'Option 3'];
   const currency = ['Select:', 'British Pound', 'Euro', 'USD'];
  
   return (

    

      <div className="App">
      <div className="govuk-width-container">
      <div className="govuk-grid-row">

      <div className="govuk-grid-column-full">
      <a href="#" className="govuk-back-link">Back</a>

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
      <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-day" name="dob-day" type="number" pattern="[0-9]*"/>
    </div>
  </div>
  <div className="govuk-date-input__item">
    <div className="govuk-form-group">
      <label className="govuk-label govuk-date-input__label" for="dob-month">
        Month
      </label>
      <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month" name="dob-month" type="number" pattern="[0-9]*"/>
    </div>
  </div>
  <div className="govuk-date-input__item">
    <div className="govuk-form-group">
      <label className="govuk-label govuk-date-input__label" for="dob-year">
        Year
      </label>
      <input className="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-year" name="dob-year" type="number" pattern="[0-9]*"/>
    </div>
  </div>
</div>

<p>
<label className="govuk-label" for="select-box">Location of detection</label>
<select className="govuk-select govuk-input--width-m" id="select-box" name="select-box" width="100%" >
{this.populateDropdowns(locations)}
</select>
<br/>
</p>

<p>
<label className="govuk-label" for="select-box">Location area</label>
<select className="govuk-select govuk-input--width-m" id="select-box" name="select-box" width="100%" onChange={this.onChange.bind(this)}>>
{this.populateDropdowns(locations)}
</select>
</p>

<p>
<label className="govuk-label" for="select-box"> 5x5x5 referral</label>
 <div className="govuk-radios govuk-radios--inline">
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="changed-name-1" name="changed-name" type="radio" value="yes"/>
        <label className="govuk-label govuk-radios__label" for="changed-name-1">
          Yes
        </label>
      </div>
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="changed-name-2" name="changed-name" type="radio" value="no"/>
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
        <input className="govuk-radios__input" id="changed-name-1" name="changed-name" type="radio" value="yes"/>
        <label className="govuk-label govuk-radios__label" for="changed-name-1">
          Yes
        </label>
      </div>
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="changed-name-2" name="changed-name" type="radio" value="no"/>
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
        <input className="govuk-radios__input" id="formofcurrency-conditional-1" name="formofcurrency" type="radio" value="email" data-aria-controls="conditional-formofcurrency-conditional-1"/>
        <label className="govuk-label govuk-radios__label" for="formofcurrency-conditional-1">
        Cash
        </label>
      </div>
    <div className="govuk-radios govuk-radios--conditional" data-module="radios">
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="formofcurrency-conditional-1" name="formofcurrency" type="radio" value="email" data-aria-controls="conditional-formofcurrency-conditional-1" aria-expanded="false"/>
        <label className="govuk-label govuk-radios__label" for="formofcurrency-conditional-1">
          Other
        </label>
      </div>
      <div className="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-formofcurrency-conditional-1">
        <div className="govuk-form-group">
          <label className="govuk-label" for="contact-by-email">
          Other form of currency
          </label>
          <select className="govuk-select govuk-input--width-m" id="select-box" name="select-box" width="100%" onChange={this.onChange.bind(this)}>>
          {this.populateDropdowns(othercurrency)}
          </select>
        </div>
      </div>
      <div className="govuk-form-group">
          <label className="govuk-label" for="contact-by-email">
          Currency
          </label>
          <select className="govuk-select govuk-input--width-m" id="select-box" name="select-box" width="100%" onChange={this.onChange.bind(this)}>>
          {this.populateDropdowns(currency)}
          </select>
      </div>
    
    <div className="govuk-form-group">
    <label className="govuk-label" for="select-box">Amount</label>
    <span id="dob-hint" className="govuk-hint">
    In the selected currency and must not include pence or cents. For example, 12000
    </span>
    <input className="govuk-input govuk-input--width-20" id="ni-number" type="text" name="ni-number"/>
    </div>   


    <div className="govuk-form-group">
    <label className="govuk-label" for="select-box">Agency detection was referred to
    </label>
    <div className="govuk-checkboxes">
      <div className="govuk-checkboxes__item">
        <input className="govuk-checkboxes__input" id="waste-1" name="waste" type="checkbox" value="carcasses"/>
        <label className="govuk-label govuk-checkboxes__label" for="waste-1">
        Charity Commission
        </label>
      </div>
      <div className="govuk-checkboxes__item">
        <input className="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="mines"/>
        <label className="govuk-label govuk-checkboxes__label" for="waste-2">
        DWP
        </label>
      </div>
      <div className="govuk-checkboxes__item">
        <input className="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="farm"/>
        <label className="govuk-label govuk-checkboxes__label" for="waste-3">
        HMRC
        </label>
      </div>


     <div className="govuk-checkboxes__item">
        <input className="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="mines"/>
        <label className="govuk-label govuk-checkboxes__label" for="waste-2">
        NCA
        </label>
      </div>
      <div className="govuk-checkboxes__item">
        <input className="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="farm"/>
        <label className="govuk-label govuk-checkboxes__label" for="waste-3">
        Police / Special Branch
        </label>
      </div>
 <div className="govuk-radios govuk-radios--conditional" data-module="radios">
      <div className="govuk-radios__item">
      {/* <input className="govuk-radios__input" id="how-contacted-conditional-1" name="how-contacted" type="radio" value="email" data-aria-controls="other-agency" onClick={this.onClickFunc.bind(this, "other-agency"))}/> */}
      <input className="govuk-radios__input" id="how-contacted-conditional-1" name="how-contacted" type="radio" value="email" data-aria-controls="other-agency" onClick="onClickFunc()"/>
        <label className="govuk-label govuk-radios__label" for="how-contacted-conditional-1">
          Other
        </label>
      </div>
      <div className="govuk-radios__conditional govuk-radios__conditional--hidden" id="other-agency">
        <div className="govuk-form-group">
          <label className="govuk-label" for="contact-by-email">
          Agency
          </label>
          <select className="govuk-select govuk-input--width-m" id="select-box" name="select-box" width="100%" onChange={this.onChange.bind(this)}>>
          {this.populateDropdowns(othercurrency)}
          </select>
        </div>
        </div>
        </div>


<p>
<label className="govuk-label" for="select-box"> Seized</label>
 <div className="govuk-radios govuk-radios--inline">
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="changed-name-1" name="changed-name" type="radio" value="yes"/>
        <label className="govuk-label govuk-radios__label" for="changed-name-1">
          Yes
        </label>
      </div>
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="changed-name-2" name="changed-name" type="radio" value="no"/>
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
<a href="http://localhost:4001/agencydetails" role="button" draggable="false" className="govuk-button">
  Continue
</a>

</div>
<div className="govuk-grid-column-one-quarter govuk-!-margin-top-2">
<label className="govuk-label--s"><a href="#">Cancel</a></label>
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