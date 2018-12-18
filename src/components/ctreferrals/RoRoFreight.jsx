import React, { Component } from 'react';
import {bindActionCreators} from "redux";
//import {DocumentTitle} from 'react-document-title';
import ActivityHoursMinutes from '../partials/ActivityHoursMinutes';
import ActivityStaffAndHours from '../partials/ActivityStaffAndHours';
const hosturl = "http://"+window.location.hostname + ":"+ window.location.port;
const backturl = hosturl + "/referraldetails";
const nextturl = hosturl + "/referraldetails";


class roroContainer extends Component {

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
  document.title = "OAR - CT referral - roro container details"
  const countries = ['UK', 'USA', 'India', 'France', 'Canada', 'Sri Lanka', 'Mexico'];      

  return (
  <div className="App">
  <div className="govuk-width-container">
  <div className="govuk-grid-row">

  <div className="govuk-grid-column-full">
  <a href={backturl} className="govuk-back-link">Back</a>
  <main role="main" id="govuk-width-container" className="govuk-width-container" lang="en">

  <p className="govuk-caption-xl"> CT referral </p>
  <span className="govuk-label--xl">RoRo freight details </span>

  <div className="govuk-form-group govuk-!-padding-top-6">
  <fieldset className="govuk-fieldset" aria-describedby="" role="group">


<p>
<label className="govuk-label" for="select-box"> Direction</label>
 <div className="govuk-radios govuk-radios--inline">
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="ctref-roro-direction-in"  name="ctref-roro-direction" type="radio" value="inbound"/>
        <label className="govuk-label govuk-radios__label" for="ctref-roro-direction">
        Inbound
        </label>
      </div> 
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="ctref-roro-direction-out" name="ctref-roro-direction" type="radio" value="outbound"/>
        <label className="govuk-label govuk-radios__label" for="ctref-roro-direction">
        Outbound
        </label>
      </div>
 </div>
 </p>

   <p>
      <label className="govuk-label" htmlFor="ctref-roro-cargodesc">Cargo CMR details </label>
      <textarea className="govuk-input textarea-height govuk-input--width-20" id="ctref-roro-cargodesc" type="textarea" name="ctref-roro-cargodesc">
      </textarea>
   </p>


    <p>
        <label className="govuk-label" for="ctref-roro-vehnum">Vehicle number</label>
        <input className="govuk-input govuk-input--width-20" id="ctref-roro-vehnum" type="text" name="ctref-roro-vehnum"/>
    </p>

    <p>
        <label className="govuk-label" for="ctref-roro-vehnation">Vehicle nationality</label>
        <input className="govuk-input govuk-input--width-20" id="ctref-roro-vehnation" type="text" name="ctref-roro-vehnation"/>
    </p>

    <p>
        <label className="govuk-label" for="ctref-roro-vehnhaulier">Haulier company</label>
        <input className="govuk-input govuk-input--width-20" id="ctref-roro-vehnhaulier" type="text" name="ctref-roro-vehnhaulier"/>
    </p>

    <p>
        <label className="govuk-label" for="ctref-roro-portofload">Port of loading or departure</label>
        <input className="govuk-input govuk-input--width-20" id="ctref-roro-portofload" type="text" name="ctref-roro-portofload"/>
    </p>

    <p>
      <label className="govuk-label" for="ctref-roro-destcountry">Destination country</label>
      <select className="govuk-select govuk-input--width-m" id="ctref-roro-destcountry" name="ctref-roro-destcountry" width="100%" >
      {this.populateDropdowns(countries)}
      </select>
    </p>



<p>
<label className="govuk-label" for="select-box"> Accompanied load?</label>
 <div className="govuk-radios govuk-radios">
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="ctref-roro-accload-yes"  name="ctref-roro-accload" type="radio" value="inbound"/>
        <label className="govuk-label govuk-radios__label" for="ctref-roro-accload">
        Yes
        </label>
      </div> 
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="ctref-roro-accload-no" name="ctref-roro-accload" type="radio" value="outbound"/>
        <label className="govuk-label govuk-radios__label" for="ctref-roro-accload">
        No
        </label>
      </div>
 </div>
 </p>

  <p className="govuk-label--m">Consignee </p>

  <p>
      <label className="govuk-label" for="ctref-roro-busname">Business name</label>
      <input className="govuk-input govuk-input--width-20" id="ctref-roro-busname" type="text" name="ctref-roro-busname"/>
  </p>

  <p>
      <label className="govuk-label" for="ctref-roro-pcortown">Postcode or town</label>
      <input className="govuk-input govuk-input--width-20" id="ctref-roro-pcortown" type="text" name="ctref-roro-pcortown"/>
  </p>


  <p className="govuk-label--m">Consigner </p>

  <p>
      <label className="govuk-label" for="ctref-roro-cnsnr-busname">Business name</label>
      <input className="govuk-input govuk-input--width-20" id="ctref-roro-cnsnr-busname" type="text" name="ctref-roro-cnsnr-busname"/>
  </p>

  <p>
      <label className="govuk-label" for="ctref-roro-cnsnr-pcortown">Postcode or town</label>
      <input className="govuk-input govuk-input--width-20" id="ctref-roro-cnsnr-pcortown" type="text" name="ctref-roro-cnsnr-pcortown"/>
  </p>

<p className="govuk-label--m">Delivery </p>

  <p>
      <label className="govuk-label" htmlFor="ctref-roro-deli-address">Address </label>
      <textarea className="govuk-input textarea-height govuk-input--width-20" id="ctref-roro-deli-address" type="textarea" name="ctref-roro-deli-address">
      </textarea>
   </p>

<p>
    <label className="govuk-label" for="ctref-roro-deli-pcortown">Postcode or town</label>
    <input className="govuk-input govuk-input--width-20" id="ctref-roro-deli-pcortown" type="text" name="ctref-roro-deli-pcortown"/>
</p>


  <p>
    <table>
        <td className="govuk-!-padding-right-5 govuk-!-padding-top-4"> 
              <a href={nextturl} role="button"  id="ctref-roro-continue" draggable="false" className="govuk-button">
              Continue
              </a>
        </td>
        <td className="table_td_text"> 
              <div className="govuk-label--s"><a href="http://localhost:4001/shiftdetails"  id="ctref-roro-cancel">Cancel</a></div>
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
  
  export default roroContainer