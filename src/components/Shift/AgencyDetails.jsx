import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';
import 'govuk-frontend/all.scss';
import { Tabs } from 'govuk-frontend';
// const GOVUKFrontend = require('govuk-frontend')
// GOVUKFrontend.initAll()
// import { initAll } from 'govuk-frontend';
// initAll()

class AgencyDetails extends Component {
  
  render() {
    
   return (

    

      <div className="App">
      <div className="govuk-width-container">
      <div className="govuk-grid-row">

      <div className="govuk-grid-column-two-thirds">
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
        <input className="govuk-radios__input" id="how-contacted-conditional-1" name="how-contacted" type="radio" value="email" data-aria-controls="conditional-how-contacted-conditional-1"/>
        <label className="govuk-label govuk-radios__label" for="how-contacted-conditional-1">
          Yes
        </label>
      </div>
      <div className="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-conditional-1">
        <div className="govuk-form-group">
          <label className="govuk-label" for="contact-by-email">
          Centaur reference
          </label>
          <input className="govuk-input govuk-input--width-20" id="ni-number" type="text" name="ni-number"/>
        </div>
      </div>
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="how-contacted-conditional-1" name="how-contacted" type="radio" value="email" data-aria-controls="conditional-how-contacted-conditional-1"/>
        <label className="govuk-label govuk-radios__label" for="how-contacted-conditional-1">
        No
        </label>
      </div>
     </div>
    </div>
 </p>  


<p>
<label className="govuk-label" for="select-box"> Did HMRC adopt the cash detection?
</label>

    <div className="govuk-radios govuk-radios--conditional" data-module="radios">


    <div className="govuk-radios govuk-radios--conditional" data-module="radios">
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="how-contacted-conditional-1" name="how-contacted" type="radio" value="email" data-aria-controls="conditional-how-contacted-conditional-1"/>
        <label className="govuk-label govuk-radios__label" for="how-contacted-conditional-1">
          Yes
        </label>
      </div>
      <div className="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-conditional-1">
        <div className="govuk-form-group">
          <label className="govuk-label" for="contact-by-email">
          Centaur reference
          </label>
          <input className="govuk-input govuk-input--width-20" id="ni-number" type="text" name="ni-number"/>
        </div>
      </div>
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="how-contacted-conditional-1" name="how-contacted" type="radio" value="email" data-aria-controls="conditional-how-contacted-conditional-1"/>
        <label className="govuk-label govuk-radios__label" for="how-contacted-conditional-1">
        No
        </label>
      </div>
     </div>
    </div>
 </p>  








      

{/* OVERRIDES:_ govuk-\!-font-size-36 */}

<p>
<div className="govuk-grid-row govuk-!-margin-top-9">
<div className="govuk-grid-column-one-quarter">
<a href="#" role="button" draggable="false" className="govuk-button">
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
<div className="govuk-form-group">
  <fieldset className="govuk-fieldset" aria-describedby="how-contacted-conditional-hint">
    <legend className="govuk-fieldset__legend govuk-fieldset__legend--xl">
      <h1 className="govuk-fieldset__heading">
        How would you prefer to be contacted?
      </h1>
    </legend>
    <span id="how-contacted-conditional-hint" className="govuk-hint">
      Select one option.
    </span>
    <div className="govuk-radios govuk-radios--conditional" data-module="radios">
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="how-contacted-conditional-1" name="how-contacted" type="radio" value="email" data-aria-controls="conditional-how-contacted-conditional-1"/>
        <label className="govuk-label govuk-radios__label" for="how-contacted-conditional-1">
          Email
        </label>
      </div>
      <div className="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-conditional-1">
        <div className="govuk-form-group">
          <label className="govuk-label" for="contact-by-email">
            Email address
          </label>
          <input className="govuk-input govuk-!-width-one-third" id="contact-by-email" name="contact-by-email" type="email"/>
        </div>

      </div>
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="how-contacted-conditional-2" name="how-contacted" type="radio" value="phone" data-aria-controls="conditional-how-contacted-conditional-2"/>
        <label className="govuk-label govuk-radios__label" for="how-contacted-conditional-2">
          Phone
        </label>
      </div>
      <div className="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-conditional-2">
        <div className="govuk-form-group">
          <label className="govuk-label" for="contact-by-phone">
            Phone number
          </label>
          <input className="govuk-input govuk-!-width-one-third" id="contact-by-phone" name="contact-by-phone" type="tel"/>
        </div>

      </div>
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id="how-contacted-conditional-3" name="how-contacted" type="radio" value="text" data-aria-controls="conditional-how-contacted-conditional-3"/>
        <label className="govuk-label govuk-radios__label" for="how-contacted-conditional-3">
          Text message
        </label>
      </div>
      <div className="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-conditional-3">
        <div className="govuk-form-group">
          <label className="govuk-label" for="contact-by-text">
            Mobile phone number
          </label>
          <input className="govuk-input govuk-!-width-one-third" id="contact-by-text" name="contact-by-text" type="tel"/>
        </div>

      </div>
    </div>
  </fieldset>
</div>

    </div>
  );
}
}

export default AgencyDetails