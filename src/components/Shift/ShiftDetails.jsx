import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


class ShiftDetails extends Component {
    render() {
      console.log('====== in Shift component')
      return (
        <div>
          <div className="govuk-width-container">
          <div className="govuk-grid-row">

          <div className="govuk-grid-column-two-thirds">
          <a href="#" className="govuk-back-link">Back</a>
          
          <main role="main" id="govuk-width-container" className="govuk-width-container govuk-!-margin-top-5" lang="en">

          <div className="app-content__header">
          <span className="govuk-caption-xl"> Shift details </span>
          <h1 className="govuk-heading-xl"> Thursday 21 October 2018 </h1>
          </div>

          <div className="govuk-form-group">
          <fieldset className="govuk-fieldset" aria-describedby="dob-hint" role="group">

          <Tabs>
            <TabList>
              <Tab> <label className="govuk-label" for="select-box">Activities</label> </Tab>
              <Tab> <label className="govuk-label" for="select-box">Cash detections</label> </Tab>
              <Tab> <label className="govuk-label" for="select-box">Shift details</label> </Tab>
            </TabList>
              <TabPanel>
              <h2 className="govuk-heading-l">Shift details</h2>
              <h1 className="govuk-heading-s">Primary Control Point (PCP)</h1>
              <table className="govuk-table">
              <tbody className="govuk-table__body">
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">General PCP</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                      <a href=""> Edit </a>
                    </td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Detention management</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                      <a href=""> Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">Immigration casework</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                      <a href=""> Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                   <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">Other immigration</td>
                   <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">0 hours</td>
                   <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                      <a href=""> Edit </a>
                   </td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">CT referrals</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                      <a href=""> Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                   <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">Safeguarding</td>
                   <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">0 hours</td>
                   <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                      <a href=""> Edit </a>
                   </td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">Immigration casework</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                      <a href=""> Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                   <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">Other immigration</td>
                   <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">0 hours</td>
                   <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                      <a href=""> Edit </a>
                   </td>
                  </tr>                               
                </tbody>
              </table>
              </TabPanel>
              <TabPanel>
              <h2 className="govuk-heading-l govuk-!-margin-top-5">Cash detections</h2>
              <label className="govuk-label" for="select-box">
                        No cash detections added to this shift</label>
              <button className="govuk-button govuk-!-margin-top-5" type="submit"> Add a cash detection</button>
              </TabPanel>

              <TabPanel>
              <h2 className="govuk-heading-l">Shift details</h2>
              <table className="govuk-table">
              <tbody className="govuk-table__body">
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Date</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">20 October 2018</td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Team ID</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">DS02F1 - Dover</td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Region</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">South East & Europe</td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Location</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">Dovers</td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Cost centre code</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">012345 - BF_Dover</td>
                  </tr> 
                 <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Border Force Higher Officers (BFHO)</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">1 (8 hours)</td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Joint team region</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">-</td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Joint team ID</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">-</td>
                  </tr>                                    
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">JBorder Force Officers (BFO)</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">2 (16 hours)</td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Border Force Assistant Officers (BFAO)</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">0</td>
                  </tr>                                  
                </tbody>
              </table>
              </TabPanel>
  </Tabs>

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
  
  export default ShiftDetails