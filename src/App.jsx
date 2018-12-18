import React from 'react'
import Footer from './components/Footer'
import Main from './Main'
import Header from "./components/Header";
import SubmissionBanner from "./components/SubmissionBanner";
import { Provider } from 'react-redux';
import store  from './store/store';
import {connect} from "react-redux";
import { trackHeaderMenuChanges } from './actions/headerActions';

const App = () => (
     
    <Provider store={store}>
            <div> 
            <Header/>
            <SubmissionBanner />
                
            <div className="govuk-header__container--full-width" style={{paddingTop : '20px', height:'100vh'}}>
                <Main/>
            </div>   
    
            {/* <Footer/> */}
        </div>
        </Provider>
        );
  
export default App