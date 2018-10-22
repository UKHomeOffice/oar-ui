import React from 'react'
import Footer from './components/Footer'
import Main from './Main'
import Header from "./components/Header";
import SubmissionBanner from "./components/SubmissionBanner";

const App = () => (
    <div>
        <Header/>
        <SubmissionBanner />
    <script>document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled');</script>
    
        <div className="container" style={{paddingTop : '20px', height:'100vh'}}>
        

            <Main/>
        </div> 

        {/* <Footer/> */}
    </div>
);

export default App