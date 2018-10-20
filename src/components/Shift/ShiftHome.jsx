import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';
import 'govuk-frontend/all.scss';
import '../../../public/styles/oarstyle.scss';

import { Tabs } from 'govuk-frontend';
// const GOVUKFrontend = require('govuk-frontend')
// GOVUKFrontend.initAll()
// import { initAll } from 'govuk-frontend';
// initAll()

class ShiftHome extends Component {
  constructor() {
    super();
    this.state = { tabIndex: 0 };
  }
  render() {
    return (
      <div >
      <div className="govuk-tabs" data-module="tabs">
  <h2 className="govuk-tabs__title">
    Contents
  </h2>

  <ul className="govuk-tabs__list">
    <li className="govuk-tabs__list-item">
      <a className="govuk-tabs__tab govuk-tabs__tab--selected" href="#past-day">
        Past day
      </a>
    </li>
    <li className="govuk-tabs__list-item">
      <a className="govuk-tabs__tab" href="#past-week">
        Past week
      </a>
    </li>
    <li className="govuk-tabs__list-item">
      <a className="govuk-tabs__tab" href="#past-month">
        Past month
      </a>
    </li>
    <li className="govuk-tabs__list-item">
      <a className="govuk-tabs__tab" href="#past-year">
        Past year
      </a>
    </li>
  </ul>

</div>

      </div>
      
    );
  }
}
export default ShiftHome