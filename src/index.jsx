import React from "react";
import ReactDOM from "react-dom";
import {AppContainer} from 'react-hot-loader';

import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import ScrollToTop from "./components/ScrollToTop";
//const tabsjs = require('../public/styles/tabs.js');
//import '../public/styles/tabs.js';

{/* <script src='../public/styles/tabs.js'/> */}


  ReactDOM.render(
            <App/>
        , document.getElementById('index'));


console.log("=========== OAR CI");

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(NextApp)
    })
}