import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';
import 'govuk-frontend/all.scss';
import { Tabs } from 'govuk-frontend';
// const GOVUKFrontend = require('govuk-frontend')
// GOVUKFrontend.initAll()
// import { initAll } from 'govuk-frontend';
// initAll()
import '../../../public/styles/oarstyle.scss';

class PCPActivity extends Component {
  
  render() {
    
   return (

    

      <div className="App">

      <div className="govuk-width-container">
      <div className="govuk-grid-row">

      <div className="govuk-grid-column-two-thirds">
      <a href="#" className="govuk-back-link">Back</a>

      <main role="main" id="govuk-width-container" className="govuk-width-container" lang="en">

      <div className="app-content__header govuk-!-margin-top-5">
      <h1 className="govuk-heading-xl"> General PCP details </h1>
      </div>

<label className="govuk-label" for="select-box">Time spent</label>


<p>
<div className="govuk-grid-row">
  <div className="govuk-grid-column-one-quarter">
  <label className="govuk-label" for="select-box">Hours</label>
  <input className="govuk-input govuk-input--width-4" id="ni-number" type="text" name="ni-number"/>
</div>

<div className="govuk-grid-column-one-quarter">
  <label className="govuk-label" for="select-box">Minutes</label>
  <select className="govuk-select govuk-input--width-s" id="select-box" name="select-box" width="100%" >
  <option>0</option>    
  <option>15</option>    
  <option>30</option>    
  <option>45</option>    
  </select></div>
</div>
</p>
      

<p>
<div className="govuk-grid-row govuk-!-margin-top-9">
<div className="govuk-grid-column-one-quarter">
<a href="http://localhost:4001/shiftdetails" role="button" draggable="false" className="govuk-button">
 Save
</a>

</div>
<div className="govuk-grid-column-one-quarter govuk-!-margin-top-2">
<label className="govuk-label--s"><a href="#">Cancel</a></label>
</div>
</div>
</p>

</main>
    </div>
    </div>
    </div>
    </div>
  );
  }
  }

export default PCPActivity