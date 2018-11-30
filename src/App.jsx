import React from 'react'
import Footer from './components/Footer'
import Main from './Main'
import Header from "./components/Header";
import SubmissionBanner from "./components/SubmissionBanner";
// = require_tree ./govuk
//const showhidecontent = require('govuk_frontend_toolkit/javascripts/govuk/show-hide-content')

const App = () => (
    <div>
        <Header/>
        <SubmissionBanner />
            
        <div className="govuk-header__container--full-width" style={{paddingTop : '20px', height:'100vh'}}>
        

            <Main/>
        </div>   

        {/* <Footer/> */}
    </div>
);

export default App