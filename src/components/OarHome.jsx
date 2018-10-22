import React from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import LoadingBar from 'react-redux-loading-bar'
import ResponsiveMenu from 'react-responsive-navbar';
import * as errorActionTypes from '../error/actionTypes';
import {bindActionCreators} from "redux";
import PubSub from "pubsub-js";

class OarHome extends React.Component {

    // componentWillMount() {
    //     this.changeRoute = this.changeRoute.bind(this);
    //     //const path = this.props.location.pathname;
    //     window.addEventListener('resize', this.handleWindowSizeChange);
    //     this.state = {
    //        // routerPath: path
    //     }
    // }


    // componentWillUnmount() {
    //     window.removeEventListener('resize', this.handleWindowSizeChange);
    // }

    // handleWindowSizeChange = () => {
    //     this.setState({width: window.innerWidth});
    // };

    // changeRoute(path) {
    //     this.setState({routerPath: path});
    //     this.props.resetError();
    //     PubSub.publish("submission", {
    //         submission: false,
    //         message: null
    //     });
    //     this.props.history.replace(path);
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.location.pathname !== this.props.location.pathname) {
    //         this.setState({routerPath: nextProps.location.pathname});
    //     }
    // }


    render() {
    
return      <div className="App">
<div className="govuk-width-container">
<div className="grid-row">

<div className="govuk-grid-column-two-thirds govuk-section-break--xl">
<main role="main" id="govuk-width-container" className="govuk-width-container" lang="en">

<p className="govuk-heading-l">Operational activity reporting</p>

<div className="govuk-label govuk-!-display-inline"> Signed in as</div>
<div className="govuk-label--s govuk-!-display-inline"> Gillian Armstrong.</div>
<div className="govuk-label govuk-!-margin-left-3 govuk-!-display-inline"><a href="http://localhost:4001/startpage">Sign out</a> </div>


<p className="govuk-label--m"><a href="http://localhost:4001/shiftdetails">Wednesday 20 October 2018</a></p>
<p className="govuk-label"> DS02F1 - Dover</p>
<hr/>

<p className="govuk-label--m"><a href="http://localhost:4001/shiftdetails">Wednesday 20 October 2018</a></p>
<p className="govuk-label"> DS02F1 - Dover</p>

<hr/>

<a href="http://localhost:4001/createshift" role="button" draggable="false" className="govuk-button">
Add shift
</a>


</main>

</div>

</div>
</div>

</div>
}
}


export default OarHome