import React, { Component } from 'react';
import SearchesExamTypes from '../partials/SearchesExamTypes';

class Searches extends Component {

  render() {
           
    return (
      
      <div className="govuk-!-margin-top-4">
          <label className="govuk-label" for="select-box">Examination types </label>
  
      <div className="govuk-form-group">
        <fieldset className="govuk-fieldset" aria-describedby="citizenship-conditional-hint">
          <div className="govuk-checkboxes" data-module="checkboxes">
           
            <div className="govuk-checkboxes__item">
              <input className="govuk-checkboxes__input" id="search-self" name="citizen" type="checkbox" value="phone" data-aria-controls="conditional-search-self"/>
              <label className="govuk-label govuk-checkboxes__label" for="search-self">
              Self selection
              </label>
            </div>
            <div className="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-search-self">
            {/* <div className="govuk-checkboxes__conditional govuk-checkboxes__conditional" id="conditional-search-self"> */}
              <div className="govuk-form-group">
                {/* Todo:- Send params of id and name to this component */}
                <SearchesExamTypes/> 
                {/* <input className="govuk-input govuk-!-width-one-third" id="contact-by-phone" name="contact-by-phone" type="tel"/> */}
              </div>
            </div>

            <div className="govuk-checkboxes__item">
              <input className="govuk-checkboxes__input" id="search-pcp" name="citizen" type="checkbox" value="phone" data-aria-controls="conditional-search-pcp"/>
              <label className="govuk-label govuk-checkboxes__label" for="search-pcp">
              PCP referral
              </label>
            </div>
            <div className="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-search-pcp">
            {/* <div className="govuk-checkboxes__conditional govuk-checkboxes__conditional" id="conditional-search-pcp"> */}
              <div className="govuk-form-group">
                {/* Todo:- Send params of id and name to this component */}
                <SearchesExamTypes/> 
              </div>
            </div>

            <div className="govuk-checkboxes__item">
              <input className="govuk-checkboxes__input" id="search-target" name="citizen" type="checkbox" value="phone" data-aria-controls="conditional-search-target"/>
              <label className="govuk-label govuk-checkboxes__label" for="search-target">
              Target and selection
              </label>
            </div>
            <div className="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-search-target">
            {/* <div className="govuk-checkboxes__conditional govuk-checkboxes__conditional" id="conditional-search-target"> */}
              <div className="govuk-form-group">
                {/* Todo:- Send params of id and name to this component */}
                <SearchesExamTypes/> 
                  <p>
                  <label className="govuk-label" for="search-target-category"> Category </label>
                  <div className="govuk-radios govuk-radios--inline">
                        <div className="govuk-radios__item">
                          <input className="govuk-radios__input" id="search-target-category-a" name="search-target-category" type="radio" value="a"/>
                          <label className="govuk-label govuk-radios__label" for="search-target-category-a">
                            A
                          </label>
                        </div>
                        <div className="govuk-radios__item">
                          <input className="govuk-radios__input" id="search-target-category-b" name="search-target-category" type="radio" value="b"/>
                          <label className="govuk-label govuk-radios__label" for="search-target-category-b">
                            B
                          </label>
                        </div>
                        <div className="govuk-radios__item">
                          <input className="govuk-radios__input" id="search-target-category-c" name="search-target-category" type="radio" value="c"/>
                          <label className="govuk-label govuk-radios__label" for="search-target-category-c">
                            C
                          </label>
                        </div>
                  </div>
                  </p>

              </div>
            </div>                        

             <div className="govuk-checkboxes__item">
              <input className="govuk-checkboxes__input" id="search-intelli" name="search-intelli" type="checkbox" value="search-intelli" data-aria-controls="conditional-search-intelli"/>
              <label className="govuk-label govuk-checkboxes__label" for="search-intelli">
              Intelligence and third party referrals
              </label>
            </div>
            <div className="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-search-intelli">
            {/* <div className="govuk-checkboxes__conditional govuk-checkboxes__conditional" id="conditional-search-intelli"> */}
              <div className="govuk-form-group">
                {/* Todo:- Send params of id and name to this component */}
                <SearchesExamTypes/> 
              </div>
            </div>                        

         </div>
        </fieldset>
      </div>
      </div>
      );
    }
  }
  
  export default Searches