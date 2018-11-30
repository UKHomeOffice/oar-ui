import React from "react";
import ReactDOM from "react-dom";
//import express from 'express';

// 

// import {AppContainer} from 'react-hot-loader';
// import {BrowserRouter} from 'react-router-dom'
// import {Provider} from 'react-redux';
// import ScrollToTop from "./components/ScrollToTop";

/* GDS toolkit imports */
import 'govuk-frontend/all.scss';
import '../public/styles/oarstyle.scss';
import App from './App';
import { initAll } from 'govuk-frontend'       

// import session from 'express-session';
// import Keycloak from 'keycloak-connect';


// const app = express();

ReactDOM.render(
            <App/>
        , document.getElementById('index'));

 
 /* GDS toolkit Javascript additions for toggling for Radio and Checkbox */
 document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled');
 /* GDS toolkit Javascript initiation */
 initAll()

 
//  let kcConfig = {
//     clientId: 'oar-login',
//     bearerOnly: true,
//     serverUrl: 'http://localhost:8081/auth',
//     realm: 'OAR'
//     //realmPublicKey: 'MIIBIjANB...'
// };

// const memoryStore = new session.MemoryStore();
// const keycloak = new Keycloak({store: memoryStore}, kcConfig);
// app.use(keycloak.middleware());

// let connections = [];

// server.on('connection', connection => {
//     connections.push(connection);
//     connection.on('close', () => connections = connections.filter(curr => curr !== connection));
// });


/* Hot Module Replacement */
if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(NextApp)
    })
}