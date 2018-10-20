import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import CreateShift from './components/Shift/CreateShift';
import OarHome from './components/OarHome';
import StartPage from './components/StartPage';
import ShiftDetails from './components/Shift/ShiftDetails';
import ShiftHome from './components/Shift/ShiftHome';
import CashDetections from './components/Shift/CashDetections';

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
            <Redirect to="/home"/>
        </Switch>
        </BrowserRouter>


    </main>
);

export default Main