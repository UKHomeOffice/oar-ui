import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom';
import HomePage from '../pages/home/components/HomePage';
import CreateShift from './components/Shift/CreateShift';
import OarHome from './components/OarHome';
import StartPage from './components/StartPage';

const Main = () => (
    <main>
        <Switch onUpdate={() => window.scrollTo(0, 0)}>
            <Route name="Home" exact path="/home" render={() => (
                <HomePage/>
            )}/>
            <Route name="startpage" exact path="/startpage" render={() => (
                <StartPage/>
            )}/>            
            <Route name="oarhome" exact path="/oarhome" render={() => (
                <OarHome/>
            )}/>
            <Route name="createshift" exact path="/createshift" render={() => (
                <CreateShift/>
            )}/>           
    
            <Redirect to="/home"/>
        </Switch>


    </main>
);

export default Main