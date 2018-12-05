import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';

class AgencyDetails extends Component {
  render() {
    document.title = "OAR - Cash detections - Agency adoption details "

  return (

    <div>
      
      <div className="govuk-width-container">
      <div className="govuk-grid-row">

      <div className="govuk-grid-column-full">
      <a href="#" className="govuk-back-link">Back</a>

      <main role="main" id="govuk-width-container" className="govuk-width-container" lang="en">

      <div className="app-content__header govuk-!-margin-top-5">
      <span className="govuk-caption-xl"> Cash detection </span>
      <h1 className="govuk-heading-xl"> Agency adoption details </h1>
      </div>
      
    <div className="govuk-form-group">
    <fieldset className="govuk-fieldset" aria-describedby="dob-hint" role="group">
<p>
    <label className="govuk-label" for="select-box"> Did DWP adopt the cash detection?
    </label>

    <div className="govuk-radios govuk-radios--conditional" data-module="radios">
        <div className="govuk-radios govuk-radios--conditional" data-module="radios">
          <div className="govuk-radios__item">
            <input className="govuk-radios__input" id="cashdet-agency-adoption-1-y" name="cashdet-agency-adoption-1" type="radio" value="yes" data-aria-controls="conditional-cashdet-agency-adoption-1-y"/>
            <label className="govuk-label govuk-radios__label" for="cashdet-agency-adoption-1-y">
              Yes
            </label>
          </div>
          <div className="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-cashdet-agency-adoption-1-y">
            <div className="govuk-form-group">
              <label className="govuk-label" for="conditional-cashdet-agency-adoption-1-y">
              Centaur reference
              </label>
              <input className="govuk-input govuk-input--width-20" id="ni-number" type="text" name="ni-number"/>
            </div>
          </div>
          <div className="govuk-radios__item">
            <input className="govuk-radios__input" id="cashdet-agency-adoption-1-n" name="cashdet-agency-adoption-1" type="radio" value="no" data-aria-controls="conditional-cashdet-agency-adoption-1-n"/>
            <label className="govuk-label govuk-radios__label" for="cashdet-agency-adoption-1-n">
            No
            </label>
          </div>
        </div>
    </div>
</p>  

<p>
    <label className="govuk-label" for="select-box">  Did HMRC adopt the cash detection?
    </label>

    <div className="govuk-radios govuk-radios--conditional" data-module="radios">
        <div className="govuk-radios govuk-radios--conditional" data-module="radios">
          <div className="govuk-radios__item">
            <input className="govuk-radios__input" id="cashdet-agency-adoption-2-y" name="cashdet-agency-adoption-2" type="radio" value="yes" data-aria-controls="conditional-cashdet-agency-adoption-2-y"/>
            <label className="govuk-label govuk-radios__label" for="cashdet-agency-adoption-2-y">
              Yes
            </label>
          </div>
          <div className="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-cashdet-agency-adoption-2-y">
            <div className="govuk-form-group">
              <label className="govuk-label" for="conditional-cashdet-agency-adoption-2-y">
              Centaur reference
              </label>
              <input className="govuk-input govuk-input--width-20" id="ni-number" type="text" name="ni-number"/>
            </div>
          </div>
          <div className="govuk-radios__item">
            <input className="govuk-radios__input" id="cashdet-agency-adoption-2-n" name="cashdet-agency-adoption-2" type="radio" value="no" data-aria-controls="conditional-cashdet-agency-adoption-2-n"/>
            <label className="govuk-label govuk-radios__label" for="cashdet-agency-adoption-2-n">
            No
            </label>
          </div>
        </div>
    </div>
 </p>  

<p>
    <div className="govuk-grid-row govuk-!-margin-top-9">
      <div className="govuk-grid-column-one-quarter">
        <a href="http://localhost:4001/shiftdetails" role="button" id="agency-detail-continue-button" draggable="false" className="govuk-button">
          Continue
        </a>
      </div>
      <div className="govuk-grid-column-one-quarter govuk-!-margin-top-2">
      <label className="govuk-label--s"><a href="#"  id="agency-detail-Cancel" >Cancel</a></label>
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

export default AgencyDetails