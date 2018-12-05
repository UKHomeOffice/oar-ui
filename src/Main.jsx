import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import CreateShift from './components/Shift/CreateShift';
import OarHome from './components/OarHome';
import StartPage from './components/StartPage';
import ShiftDetails from './components/Shift/ShiftDetails';
import ShiftHome from './components/Shift/ShiftHome';
import CashDetections from './components/Shift/CashDetections';
import AgencyDetails from './components/Shift/AgencyDetails';
import Activity from './components/Shift/Activity';
import CTReferrals from './components/ctreferrals/CTReferrals';
import AddReferral from './components/ctreferrals/AddReferral';
import LocationRefType from './components/ctreferrals/LocationRefType';
import ReferralDetails from './components/ctreferrals/ReferralDetails';
import PassengerDetails from './components/ctreferrals/PassengerDetails';
import SubmitConfirm from './components/Shift/SubmitConfirm';
import TravelDetails from './components/ctreferrals/TravelDetails';
import FastParcels from './components/ctreferrals/FastParcels';
import MaritimeContainer from './components/ctreferrals/MaritimeContainer';
import store  from './store/store';
import {connect} from "react-redux";

//import ActivityIntTradeCheck from './components/Shift/ActivityIntTradeCheck';
const c = store.getState().menuselected
console.log("========"+ c);
const Main = () => ( 
    <main>
        <BrowserRouter>
        <Switch onUpdate={() => window.scrollTo(0, 0)}>
            <Route name="startpage" exact path="/startpage" render={() => (
                <StartPage/>
            )}/>  
            <Route name="shifthome" exact path="/shifthome" render={() => (
                <ShiftHome/>
            )}/>                       
            <Route name="oarhome" exact path="/oarhome" render={() => (

                 <OarHome/>
            )}/>
            <Route name="createshift" exact path="/createshift" render={() => (
                <CreateShift/>
            )}/>           
             <Route name="shiftdetails" exact path="/shiftdetails" render={() => (
                <ShiftDetails/>
            )}/>  
             <Route name="cashdetections" exact path="/cashdetections" render={() => (
                <CashDetections/>
            )}/>  
             <Route name="agencydetails" exact path="/agencydetails" render={() => (
                <AgencyDetails/>
            )}/>  
             <Route name="activity" exact path="/activity" render={() => (
                <Activity/>
            )}/> 
             {/* <Route name="activityinttradecheck" exact path="/activityinttradecheck" render={() => (
                <ActivityIntTradeCheck />
            )}/>    */}
             <Route name="ctreferrals" exact path="/ctreferrals" render={() => (
                <CTReferrals/>
            )}/> 
             <Route name="addreferral" exact path="/addreferral" render={() => (
                <AddReferral/>
            )}/> 
             <Route name="locationreftype" exact path="/locationreftype" render={() => (
                <LocationRefType/>
            )}/>
             <Route name="referraldetails" exact path="/referraldetails" render={() => (
                <ReferralDetails/>
            )}/>
             <Route name="passengerdetails" exact path="/passengerdetails" render={() => (
                <PassengerDetails/>
            )}/>              
            <Route name="passengerdetails" exact path="/passengerdetails" render={() => (
                <PassengerDetails/>
            )}/>  
            <Route name="traveldetails" exact path="/traveldetails" render={() => (
                <TravelDetails/>
            )}/>    
            <Route name="fastparcels" exact path="/fastparcels" render={() => (
                <FastParcels/>
            )}/>  
            <Route name="maritimecontainer" exact path="/maritimecontainer" render={() => (
                <MaritimeContainer/>
            )}/>                                              
            <Route name="submitconfirm" exact path="/submitconfirm" render={() => (
                <SubmitConfirm/>
            )}/>                    
            <Redirect to="/oarhome"/>
        </Switch>
        </BrowserRouter>


    </main>
);

// const mapStateToProps = state => ({
//     menuselected: state.menuselected
//   });
  //console.log("11-------"+ this.menuselected)
//export default connect(mapStateToProps)(Main);

const mapStateToProps = state => ({
    menuselected: state.headerMenu.menuItem
  });
  //console.log("12-------"+ this.props.menuselected);

  export default connect(mapStateToProps, null)(Main);

  
//export default Main