import React from 'react';
import {oarhomeurl} from '../index';

class StartPage extends React.Component {

   render() {

    return <div className="App">
            <div className="govuk-width-container">
                <div class="grid-row">

                    <div className="govuk-grid-column-full govuk-section-break--xl">
                    <main role="main" id="govuk-width-container" className="govuk-width-container" lang="en">

                    <p className="govuk-heading-xl">Operational activity reporting</p>
                    <p className="govuk-label"> Use this service to:</p>

                    <ul className="govuk-list govuk-list--bullet govuk-!-margin-top-5">
                        <li>Submit end of shift activities and cash detections</li>
                        <li>Submit CT referrals</li>
                        <li>Generate reports</li>
                    </ul>

                    <a href={oarhomeurl} role="button" className="govuk-button govuk-button--start">
                    Start now
                    </a>

                    </main>

                    </div>

                </div>
            </div>

    </div>
}
}
export default StartPage