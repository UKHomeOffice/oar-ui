import React from 'react';

class StartPage extends React.Component {

z
   render() {

    return <div className="App">
            <div className="govuk-width-container">
                <div class="grid-row">

                    <div className="govuk-grid-column-full govuk-section-break--xl">
                    <main role="main" id="govuk-width-container" className="govuk-width-container" lang="en">

                    <p className="govuk-heading-xl">Operational activity reporting</p>
                    <p className="govuk-label"> Use this service to:</p>

                    <ul className="govuk-list govuk-list--bullet govuk-!-margin-top-5">
                        <li>submit end of shift activities and cash detections</li>
                        <li>submit CT referrals</li>
                        <li>generate reports</li>
                    </ul>

                    <a href="http://localhost:4001/oarhome" role="button" className="govuk-button govuk-button--start">
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