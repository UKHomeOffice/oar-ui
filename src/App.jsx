import React from 'react'
import Footer from './components/Footer'
import Main from './Main'
import Header from "./components/Header";
import SubmissionBanner from "./components/SubmissionBanner";
import { Provider } from 'react-redux';
import store  from './store/store';
import {connect} from "react-redux";

import { trackHeaderMenuChanges } from './actions/headerActions';
//const { menuselected } = this.props;

const App = () => (
// class App extends Component {
//     render {
//         return(
     
    <Provider store={store}>
            <div> 
            {/* ==={this.props.menuselected}----- */}
            <Header/>
            <SubmissionBanner />
                
            <div className="govuk-header__container--full-width" style={{paddingTop : '20px', height:'100vh'}}>
            
    
                <Main/>
            </div>   
    
            {/* <Footer/> */}
        </div>
        </Provider>
        );
//     }
// }
       
// const mapStateToProps = state => ({
//     menuselected: state.headerMenu.menuItem
//   });
  
  //export default connect(mapStateToProps, { trackHeaderMenuChanges })(App);
  
export default App