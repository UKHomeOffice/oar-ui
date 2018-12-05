import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {DocumentTitle} from 'react-document-title';
import ActivityHoursMinutes from '../partials/ActivityHoursMinutes';
import ActivityStaffAndHours from '../partials/ActivityStaffAndHours';
const hosturl = "http://"+window.location.hostname + ":"+ window.location.port;
const backturl = hosturl + "/referraldetails";
const nextturl = hosturl + "/referraldetails";
import {callAPI} from '../../services/APICallService';

class AddTransitPoint extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
          <p>
            <label className="govuk-label" for="select-box">Transit point 1</label>
            <input className="govuk-input govuk-input--width-20" id="ctref-travel-transit-point1" type="text" name="ctref-travel-transit-point1"/>
          </p>
          <p>
            <label className="govuk-label" for="ctref-travel-transit-point1-country">Transit point 1 country</label>
            <select className="govuk-select govuk-input--width-m" id="ctref-travel-transit-point1-country" name="ctref-travel-transit-point1-country" width="100%" >
            {this.props.populateDropdowns(this.props.countries)}
            </select>
          </p>    
    </div>
    );
  }
}

class TravelDetails extends Component {

  componentWillMount() {
    this.state = {
     routerPath: '',
     typed: '',
     regionArr: ['Select:'],
     //countries : ['UK', 'USA', 'India', 'France', 'Canada', 'Sri Lanka', 'Mexico']     
     countries: []
 }
}

async componentDidMount(){
  console.log("componentDidMount======")
  const url = `https://private-ui.cop-dev.homeoffice.gov.uk:443/api/platform-data/rf_country`;
  const results = await callAPI(url, null);
 // console.log("==-------------results====" + results.length);
  results.map(data => {
   console.log("==22result===="+ data);
   this.state.countries.push(data)
})
this.setState({countries:this.state.countries});

}



// componentWillMount() {
//        this.state = {
//         routerPath: '',
//         typed: '',
//         regionArr: ['Select:']
//     }
// }

// componentDidMount(){
//     document.title = "OAR - Add Shift"
// }

populateDropdowns(indicators) {
    const items = [];
    indicators.forEach(function(item, index, array) {
      items.push(<option key={index} value={index}>{item}</option>);
    });
    return items;
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
 
appendRow(e) {
     this.setState({
       isaddlindicator: true,
     });
}

render() {
      document.title = "OAR - CT referral - Travel details"
      //const countries = ['UK', 'USA', 'India', 'France', 'Canada', 'Sri Lanka', 'Mexico'];      
      
return (
  <div className="App">
  <div className="govuk-width-container">
  <div className="govuk-grid-row">

  <div className="govuk-grid-column-full">
  <a href={backturl} className="govuk-back-link">Back</a>
  <main role="main" id="govuk-width-container" className="govuk-width-container" lang="en">

  <p className="govuk-caption-xl"> CT referral </p>
  <span className="govuk-label--xl">Travel details</span>

  <div className="govuk-form-group govuk-!-padding-top-6">
  <fieldset className="govuk-fieldset" aria-describedby="" role="group">

<p>
<label className="govuk-label" for="select-box"> Direction</label>
 <div className="govuk-radios govuk-radios--inline">
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="ctref-travel-direction-in"  name="ctref-travel-direction" type="radio" value="inbound"/>
        <label className="govuk-label govuk-radios__label" for="ctref-travel-direction">
        Inbound
        </label>
      </div> 
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="ctref-travel-direction-out" name="ctref-travel-direction" type="radio" value="outbound"/>
        <label className="govuk-label govuk-radios__label" for="ctref-travel-direction">
        Outbound
        </label>
      </div>
 </div>
 </p>

<label className="govuk-label" for="select-box">Date of travel </label>
    <span id="dot-hint" className="govuk-hint">
      For example, 31 3 1980
    </span>
    <div className="govuk-date-input" id="dot">
      <div className="govuk-date-input__item">
        <div className="govuk-form-group">
          <label className="govuk-label govuk-date-input__label" for="ctref-travel-dot">
            Day
          </label>
          <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="ctref-travel-day-dot" name="ctref-travel-day-dot" type="number" pattern="[0-9]*"/>
        </div>
      </div>
      <div className="govuk-date-input__item">
        <div className="govuk-form-group">
          <label className="govuk-label govuk-date-input__label" for="ctref-travel-month-dot">
            Month
          </label>
          <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="ctref-travel-month-dot" name="ctref-travel-month-dot" type="number" pattern="[0-9]*"/>
        </div>
      </div>
      <div className="govuk-date-input__item">
        <div className="govuk-form-group">
          <label className="govuk-label govuk-date-input__label" for="ctref-travel-year-dot">
            Year
          </label>
          <input className="govuk-input govuk-date-input__input govuk-input--width-4" id="ctref-travel-year-dot" name="ctref-travel-year-dot" type="number" pattern="[0-9]*"/>
        </div>
      </div>
    </div>

  <p>
    <label className="govuk-label" for="select-box">First point of embarkation</label>
    <input className="govuk-input govuk-input--width-20" id="ctref-travel-embarkation" type="text" name="ctref-travel-embarkation"/>
  </p>
    
  <p>
    <label className="govuk-label" for="ctref-passenger-country">First point country</label>
    <select className="govuk-select govuk-input--width-m" id="ctref-travel-point-country" name="ctref-travel-point-country" width="100%" >
    {this.populateDropdowns(this.state.countries)}
    </select>
  </p>

    {this.state.isaddlindicator ? 
    <AddTransitPoint populateDropdowns={this.populateDropdowns} countries={countries} />
    :  null }

   <div class="govuk-label govuk-!-margin-left-3 govuk-!-display-inline" id="ctref-travel-add-transit-point">
    <a href="#" className="govuk-label" onClick ={this.appendRow.bind(this)}> 
    + Add a transit point</a>
   </div>

  <p>
    <label className="govuk-label" for="select-box">Final destination</label>
    <input className="govuk-input govuk-input--width-20" id="ctref-travel-final-destination" type="text" name="ctref-travel-final-destination"/>
  </p>
    
  <p>
    <label className="govuk-label" for="ctref-passenger-country">Final destination country</label>
    <select className="govuk-select govuk-input--width-m" id="ctref-travel-final-dest-country" name="ctref-travel-final-dest-country" width="100%" >
    {this.populateDropdowns(this.state.countries)}
    </select>
  </p>

  <span className="govuk-label--m">Flight or vessel details</span>

  <p>
    <label className="govuk-label" for="select-box">Flight number</label>
    <input className="govuk-input govuk-input--width-20" id="ctref-travel-flight-number" type="text" name="ctref-travel-flight-number"/>
  </p>

   <p>
    <label className="govuk-label" for="select-box">Carrier</label>
    <input className="govuk-input govuk-input--width-20" id="ctref-travel-carrier" type="text" name="ctref-travel-carrier"/>
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
  
  export default TravelDetails