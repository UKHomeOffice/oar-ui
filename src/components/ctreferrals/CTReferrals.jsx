import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const hosturl = "http://"+window.location.hostname + ":"+ window.location.port;
const nextturl = hosturl + "/locationreftype";


class CTReferrals extends Component {
  
    render() {
      document.title = "OAR - CT Referrals";

      console.log('====== in Shift component')
      return (
        <div>
          <div className="govuk-width-container">
          <div className="govuk-grid-row">

          <div className="govuk-grid-column-full">
          <a href="#" className="govuk-back-link">Back</a>
          
          <main role="main" id="govuk-width-container" className="govuk-width-container govuk-!-margin-top-5" lang="en">

          <div className="app-content__header">
          {/* <span className="govuk-caption-xl"> CT referral </span> */}
          <h2 className="govuk-heading-l">CT referral</h2>
          <a href={nextturl} role="button" id="add-a-ct-referral-button" draggable="false" className="govuk-button">
                    Add a CT referral</a>
          </div>

          <div className="govuk-form-group govuk-!-padding-top-6">
          <fieldset className="govuk-fieldset" role="group">
          <table className="govuk-table">
              <tbody className="govuk-table__body">
                  <tr className="govuk-table__row">
                    <td className="table-td-left-align govuk-!-font-weight-bold" scope="col">Type</td>
                    <td className="table-td-left-align govuk-!-font-weight-bold" scope="col">Details</td>
                    <td className="table-td-left-align govuk-!-font-weight-bold" scope="col">Detected items</td>
                  </tr>

                  <tr className="govuk-table__row">
                    <td className="table-td-left-align" scope="col">
                    <div className="govuk-!-font-weight-bold">GM passenger</div>
                    <div>20 October 2018</div>
                    <div>Dover</div>
                    <div>Dock 11</div>
                    </td>
                    <td className="table-td-left-align govuk-!-font-weight-regular" scope="col">
                    <div className="govuk-!-font-weight-regular">Harold Burgess</div>
                    <div>United Kingdom</div>
                    <div>Male</div>
                    <div>Age 37</div>
                     </td>
                    <td className="table-td-left-align govuk-!-font-weight-regular" scope="col">
                    <div>Forged or counterfeit documents</div>
                    <div>Cash</div>
                    <div>Firearms and firearm components</div>
                    </td>
                  </tr>


                  <tr className="govuk-table__row">
                    <td className="table-td-left-align" scope="col">
                    <div className="govuk-!-font-weight-bold">Maritime container</div>
                    <div>19 October 2018</div>
                    <div>Folkestone</div>
                    <div>Dock 8</div>
                    </td>
                    <td className="table-td-left-align govuk-!-font-weight-regular" scope="col">
                    <div>Maesk</div>
                    <div>SBS028</div>
                    <div>China</div>
                    </td>
                    <td className="table-td-left-align govuk-!-font-weight-regular" scope="col">
                    <div>Firearms and firearm components</div>
                    <div>Evidence of fundraising</div>
                    <div>Hostile reconnaissance material</div>
                    <div>Passport or document printing machine or parts</div>
                    </td>
                  </tr>
                                              
                </tbody>
              </table>
           
       

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
  
  export default CTReferrals