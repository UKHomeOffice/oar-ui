import React from 'react'
import Footer from './components/Footer'
import App from './App'
import Main from './Main'
import Header from "./components/Header";
import SubmissionBanner from "./components/SubmissionBanner";

const App = () => (
    <div>
        <header className="govuk-header" role="banner" data-module="header">
        <Header/>
        </header>
        <SubmissionBanner />
        <div className="container" style={{paddingTop : '20px', height:'100vh'}}>
            <Main/>
        </div>
        <footer className="govuk-footer" role="contentinfo">

        <Footer/>
        </footer>
    </div>
);

export default App