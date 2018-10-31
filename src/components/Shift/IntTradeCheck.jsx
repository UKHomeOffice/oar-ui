import React, { Component } from 'react';
import SearchesExamTypes from '../partials/SearchesExamTypes';

class IntTradeCheck extends Component {

  render() {
    document.title = "OAR - International Trade checks";
    
    return (
      <div className="govuk-!-margin-top-4">
          <label className="govuk-label" htmlFor="select-box">Examination types </label>
  
      <div className="govuk-form-group">
        <fieldset className="govuk-fieldset" aria-describedby="int-trade-check">
        <p>
        <label className="govuk-label" htmlFor="int-trade-check-chief-self-gen">Number of hours</label>
        <input className="govuk-input govuk-input--width-5" id="int-trade-check-chief-self-gen" type="text" name="int-trade-check-chief-self-gen"/>
        </p>

       <p>
        <label className="govuk-label" htmlFor="int-trade-check-nch-abandon">NCH abandoned </label>
        <input className="govuk-input govuk-input--width-5" id="int-trade-check-nch-abandon" type="text" name="int-trade-check-nch-abandon"/>
        </p>

       <p>
        <label className="govuk-label" htmlFor="int-trade-check-nch-strategic">NCH strategic</label>
        <input className="govuk-input govuk-input--width-5" id="int-trade-check-nch-strategic" type="text" name="int-trade-check-nch-strategic"/>
        </p>

       <p>
        <label className="govuk-label" htmlFor="int-trade-check-nch-other">NCH other</label>
        <input className="govuk-input govuk-input--width-5" id="int-trade-check-nch-other" type="text" name="int-trade-check-nch-other"/>
        </p>

       <p>
        <label className="govuk-label" htmlFor="int-trade-check-ncts-exam">NCTS exam</label>
        <input className="govuk-input govuk-input--width-5" id="int-trade-check-ncts-exam" type="text" name="int-trade-check-ncts-exam"/>
        </p>

        </fieldset>
      </div>
      </div>
      );
    }
  }
  
  export default IntTradeCheck