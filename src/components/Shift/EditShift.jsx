import React, { Component } from 'react';

import "../../../../public/styles/govuk-frontend.css"

class Shift extends Component {
    render() {
      console.log('====== in Shift component')
      return (
        <div className="App">

<div class="govuk-width-container">
         <div class="grid-row">

        <div class="govuk-grid-column-two-thirds govuk-section-break--xl">
        <main role="main" id="govuk-width-container" class="govuk-width-container" lang="en">

        <p class="govuk-heading-l">Operational activity reporting</p>
        <p class="govuk-label--l"> Edit Shift</p>
        <p class="govuk-label--m"><a href="#">Wednesday 20 October 2018</a></p>
        <p class="govuk-label"> DS02F1 - Dover</p>
        <hr/>

        <p class="govuk-label--m"><a href="#">Wednesday 20 October 2018</a></p>
        <p class="govuk-label"> DS02F1 - Dover</p>

        <hr/>

        <p>
        <button class="govuk-button" type="submit">Add shift</button>
        </p>

        </main>

        </div>

        </div>
        </div>

        </div>
      );
    }
  }
  
  export default Shift