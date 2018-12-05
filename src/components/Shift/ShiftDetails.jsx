import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const hosturl = "http://"+window.location.hostname + ":"+ window.location.port;
const activityturl = hosturl + "/activity";

class ShiftDetails extends Component {
  makelink(section, row){
       return activityturl + '?activity=' + row + '&block=' + section;
  }
    render() {
     
      document.title = "OAR - Shift details";

      return (
        <div>
          <div className="govuk-width-container">
          <div className="govuk-grid-row">

          <div className="govuk-grid-column-full">
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
              <Tab> <label className="govuk-label" htmlFor="select-box">Activities</label> </Tab>
              <Tab> <label className="govuk-label" htmlFor="select-box">Cash detections</label> </Tab>
              <Tab> <label className="govuk-label" htmlFor="select-box">Shift details</label> </Tab>
            </TabList>
              <TabPanel>
              {/* <h2 className="govuk-heading-l">Activities</h2>
              <h1 className="govuk-heading-s">Primary Control Point (PCP)</h1> */}

              <table className="govuk-table table-border" >
              <tbody className="govuk-table__body">
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-size-27 govuk-!-font-weight-bold" colSpan="3" scope="col">
                    <h2 className="govuk-heading-l">Activities</h2>

                    <div className="warning-message" aria-labelledby="warning-message-title" role="alert" tabindex="-1" data-module="warning-message">
                      <label className="govuk-label govuk-!-font-weight-bold">
                      0 hours to allocate (0 hours total in this shift)
                      </label>
                    </div>

                    Primary Control Point (PCP)</td>
                    {/* <td>&nbsp;</td><td>&nbsp;</td> */}
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">General PCP</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <a href={this.makelink('pcp', 'pcp1')} id="activity-pcp1" > Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Detention management</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <a href={this.makelink('pcp', 'pcp2')} id="activity-pcp2" > Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Immigration casework</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <a href={this.makelink('pcp', 'pcp3')} id="activity-pcp3" > Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                   <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Other immigration</td>
                   <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0 hours</td>
                   <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                   <a href={this.makelink('pcp', 'pcp5')} id="activity-pcp4" > Edit </a>
                   </td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">CT referrals</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <a href={this.makelink('pcp', 'pcp5')} id="activity-pcp5" > Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                   <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Safeguarding</td>
                   <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0 hours</td>
                   <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                   <a href={this.makelink('pcp', 'pcp6')} id="activity-pcp6" > Edit </a>
                   </td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Forgery</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <a href={this.makelink('pcp', 'pcp7')} id="activity-pcp7" > Edit </a>
                    </td>                  
                  </tr>

                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-size-27 govuk-!-font-weight-bold" colSpan="3" scope="col">Customs</td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Red / Green channels</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <a href={this.makelink('cst', 'cst1')} id="activity-cst1" > Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col"> International Trade checks</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <a href={this.makelink('cst', 'cst2')} id="activity-cst2" > Edit </a>
                    </td>                  
                  </tr>


                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-size-27 govuk-!-font-weight-bold" colSpan="3" scope="col">Searches and examinations</td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Vehicles</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <a href={this.makelink('sae', 'sae1')} id="activity-sae1" > Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col"> People</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <a href={this.makelink('sae', 'sae2')} id="activity-sae2" > Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Freight</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <a href={this.makelink('sae', 'sae3')} id="activity-sae3" > Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col"> Aircraft</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <a href={this.makelink('sae', 'sae4')} id="activity-sae4" > Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Vessels</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <a href={this.makelink('sae', 'sae5')} id="activity-sae5" > Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col"> Scans</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <a href={this.makelink('sae', 'sae6')} id="activity-sae6" > Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-size-27 govuk-!-font-weight-bold" colSpan="3" scope="col">
                    Other
                    </td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Cyclamen</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <a href={this.makelink('oth', 'oth1')} id="activity-oth1" > Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Management meetings</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <a href={this.makelink('oth', 'oth2')} id="activity-oth2" > Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Training</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <a href={this.makelink('oth', 'oth3')} id="activity-oth3" > Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Travel</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <a href={this.makelink('oth', 'oth4')} id="activity-oth4" > Edit </a>
                    </td>                  
                  </tr>
                  {/* <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">General PCP</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <a href="http://localhost:4001/activity?activity=oth5&block=oth"> Edit </a>
                    </td>                  
                  </tr> */}
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Intelligence collection and reporting</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <a href={this.makelink('oth', 'oth5')} id="activity-oth5" > Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Other operational activity</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <a href={this.makelink('oth', 'oth6')} id="activity-oth6" > Edit </a>
                    </td>                  
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Other non-operational activity</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0 hours</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <a href={this.makelink('oth', 'oth7')} id="activity-oth7" > Edit </a>
                    </td>                  
                  </tr>                  

                </tbody>
              </table>
              <p>
              <a href="http://localhost:4001/submitconfirm" role="button" id="submit-for-reporting-button" draggable="false" className="govuk-button button-grey">
              Submit shift for reporting
              </a>
              </p>

              </TabPanel>
              <TabPanel>
              {/* <h2 className="govuk-heading-l govuk-!-margin-top-5">Cash detections</h2> */}
              {/* <label className="govuk-label" htmlFor="select-box">
                        No cash detections added to this shift</label> */}
              {/* <a href="http://localhost:4001/cashdetections" role="button" draggable="false" className="govuk-button">
              Add a cash detection
              </a> */}

              <table className="govuk-table table-border">
              <tbody className="govuk-table__body">
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-size-36 govuk-!-font-weight-bold" colSpan="4" scope="col">
                    <h2 className="govuk-heading-l">Cash detections</h2>
                    <a href="http://localhost:4001/cashdetections" role="button" draggable="false" id="Add-a-cash-detection-button" className="govuk-button">
                    Add a cash detection</a>
                    </td>
                   </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Amount</td>
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Details</td>
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Location</td>
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Date</td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td" scope="col">
                    <div className="govuk-!-font-weight-bold">£10,000</div>
                    <div>British Pound</div>
                    <div>Cash</div>
                    </td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <div className="govuk-!-font-weight-regular">5x5x5 referral</div>
                    <div>No dog indication</div>
                    <div>Seized</div>
                    <div>Referred to HMRC</div>
                     </td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <div>Dover</div>
                    <div>Terminal B</div>
                    </td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">20 October 2018</td>
                  </tr>

                  <tr className="govuk-table__row">
                    <td className="tabs-table-td" scope="col">
                    <div className="govuk-!-font-weight-bold">€20,500  (£18,225)</div>
                    <div>British Pound</div>
                    <div>Cash</div>
                    </td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <div className="govuk-!-font-weight-regular">5x5x5 referral</div>
                    <div>No dog indication</div>
                    <div>Seized</div>
                    <div>No referral</div>
                     </td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <div>Dover</div>
                    <div>Terminal A</div>
                    </td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">20 October 2018</td>
                  </tr>


                  <tr className="govuk-table__row">
                    <td className="tabs-table-td" scope="col">
                    <div className="govuk-!-font-weight-bold">£15,000</div>
                    <div>Euro</div>
                    <div>Cash</div>
                    </td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <div className="govuk-!-font-weight-regular">5x5x5 referral</div>
                    <div>No dog indication</div>
                    <div>Seized</div>
                    <div>Referred to NCA</div>
                    <div>Not adopted</div>
                     </td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">
                    <div>Dover</div>
                    <div>Terminal C</div>
                    </td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">20 October 2018</td>
                  </tr>
                                              
                </tbody>
              </table>
              <a href="http://localhost:4001/oarhome" role="button" id="submit-for-reporting-button" draggable="false" className="govuk-button">
              Submit shift for reporting
              </a>
              </TabPanel>
              

              <TabPanel>
              <table className="govuk-table table-border" >
              <tbody className="govuk-table__body">
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-size-36 govuk-!-font-weight-bold" colSpan="2" scope="col">Shift details</td>
                  </tr>

                  <tr className="govuk-table__row">

                  <td className="tabs-table-td govuk-!-font-weight-bold" scope="col"> Date</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">20 October 2018</td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Team ID</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">DS02F1 - Dover</td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Region</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">South East & Europe</td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Location</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">Dovers</td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Cost centre code</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">012345 - BF_Dover</td>
                  </tr> 
                 <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Border Force Higher Officers (BFHO)</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">1 (8 hours)</td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Joint team region</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">-</td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Joint team ID</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">-</td>
                  </tr>                                    
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">JBorder Force Officers (BFO)</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">2 (16 hours)</td>
                  </tr>
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Border Force Assistant Officers (BFAO)</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">0</td>
                  </tr>     
                  <tr className="govuk-table__row">
                    <td className="tabs-table-td govuk-!-font-weight-bold" scope="col">Total shift hours</td>
                    <td className="tabs-table-td govuk-!-font-weight-regular" scope="col">24 Hours</td>
                  </tr>                                                
                </tbody>
              </table>

              <label className="govuk-label"><a href="#">Edit Shift</a></label>

              <p>
              <a href="http://localhost:4001/oarhome" role="button" id="submit-for-reporting-button" draggable="false" className="govuk-button">
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