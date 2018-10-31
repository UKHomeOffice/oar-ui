import React from "react";
import ReactDOM from "react-dom";
// import {AppContainer} from 'react-hot-loader';
// import {BrowserRouter} from 'react-router-dom'
// import {Provider} from 'react-redux';
// import ScrollToTop from "./components/ScrollToTop";

/* GDS toolkit imports */
import 'govuk-frontend/all.scss';
import '../public/styles/oarstyle.scss';
import App from './App';
import { initAll } from 'govuk-frontend'       


  ReactDOM.render(
            <App/>
        , document.getElementById('index'));

 
 /* GDS toolkit Javascript additions for toggling for Radio and Checkbox */
 document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled');
 /* GDS toolkit Javascript initiation */
 initAll()

/* Hot Module Replacement */
if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(NextApp)
    })
}