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
              <h2 className="govuk-heading-l">Activities</h2>
              <h1 className="govuk-heading-s">Primary Control Point (PCP)</h1>
              <table className="govuk-table">
              <tbody className="govuk-table__body">
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-size-24 govuk-!-font-weight-bold" scope="col">General PCP</td>
                    <td>&nbsp;</td><td>&nbsp;</td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Detention management</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                    <a href="http://localhost:4001/activity_pcp"> Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Immigration casework</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                      <a href=""> Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                   <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Other immigration</td>
                   <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">0 hours</td>
                   <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                      <a href=""> Edit </a>
                   </td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">CT referrals</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                      <a href=""> Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                   <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Safeguarding</td>
                   <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">0 hours</td>
                   <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                      <a href=""> Edit </a>
                   </td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Forgery</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                      <a href=""> Edit </a>
                    </td>                  
                  </tr>

                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-size-24 govuk-!-font-weight-bold" scope="col">Customs</td>
                    <td>&nbsp;</td><td>&nbsp;</td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Red / Green channels</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                      <a href=""> Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col"> International Trade checks</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                      <a href=""> Edit </a>
                    </td>                  
                  </tr>


                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-size-24 govuk-!-font-weight-bold" scope="col">Searches and examinations</td>
                    <td>&nbsp;</td><td>&nbsp;</td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Vehicles</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                      <a href=""> Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col"> People</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                      <a href=""> Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Freight</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                      <a href=""> Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col"> Aircraft</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                      <a href=""> Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Vessels</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                      <a href=""> Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col"> Scans</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                      <a href=""> Edit </a>
                    </td>                  
                  </tr>

                </tbody>
              </table>
              <p>
              <a href="http://localhost:4001/oarhome" role="button" draggable="false" className="govuk-button">
              Submit shift for reporting
              </a>
              </p>

              </TabPanel>
              <TabPanel>
              <h2 className="govuk-heading-l govuk-!-margin-top-5">Cash detections</h2>
              {/* <label className="govuk-label" for="select-box">
                        No cash detections added to this shift</label> */}
              <a href="http://localhost:4001/cashdetections" role="button" draggable="false" className="govuk-button">
              Add a cash detection
              </a>

              <table className="govuk-table">
              <tbody className="govuk-table__body">
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Amount</td>
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Details</td>
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Location</td>
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Date</td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell" scope="col">
                    <div className="govuk-!-font-weight-bold">£10,000</div>
                    <div>British Pound</div>
                    <div>Cash</div>
                    </td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                    <div className="govuk-!-font-weight-regular">5x5x5 referral</div>
                    <div>No dog indication</div>
                    <div>Seized</div>
                    <div>Referred to HMRC</div>
                     </td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                    <div>Dover</div>
                    <div>Terminal B</div>
                    </td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">20 October 2018</td>
                  </tr>

                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell" scope="col">
                    <div className="govuk-!-font-weight-bold">€20,500  (£18,225)</div>
                    <div>British Pound</div>
                    <div>Cash</div>
                    </td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                    <div className="govuk-!-font-weight-regular">5x5x5 referral</div>
                    <div>No dog indication</div>
                    <div>Seized</div>
                    <div>No referral</div>
                     </td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                    <div>Dover</div>
                    <div>Terminal A</div>
                    </td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">20 October 2018</td>
                  </tr>


                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell" scope="col">
                    <div className="govuk-!-font-weight-bold">£15,000</div>
                    <div>Euro</div>
                    <div>Cash</div>
                    </td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                    <div className="govuk-!-font-weight-regular">5x5x5 referral</div>
                    <div>No dog indication</div>
                    <div>Seized</div>
                    <div>Referred to NCA</div>
                    <div>Not adopted</div>
                     </td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">
                    <div>Dover</div>
                    <div>Terminal C</div>
                    </td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">20 October 2018</td>
                  </tr>
                                              
                </tbody>
              </table>
              <a href="http://localhost:4001/oarhome" role="button" draggable="false" className="govuk-button">
              Submit shift for reporting
              </a>
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
                  <tr className="govuk-table__row">
                    <td className="govuk-table__cell govuk-!-font-weight-bold" scope="col">Total shift hours</td>
                    <td className="govuk-table__cell govuk-!-font-weight-regular" scope="col">24 Hours</td>
                  </tr>                                                
                </tbody>
              </table>

              <label className="govuk-label"><a href="#">Edit Shift</a></label>

              <p>
              <a href="http://localhost:4001/oarhome" role="button" draggable="false" className="govuk-button">
              Submit shift for reporting
              </a>
              </p>

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