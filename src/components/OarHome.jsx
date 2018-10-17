import React from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import LoadingBar from 'react-redux-loading-bar'

import img from 'govuk_template_ejs/assets/images/gov.uk_logotype_crown_invert_trans.png?0.23.0'
import ResponsiveMenu from 'react-responsive-navbar';
import * as errorActionTypes from '../../core/error/actionTypes';
import {bindActionCreators} from "redux";
import PubSub from "pubsub-js";
//import "../../../public/styles/app.css";
import "../../../public/styles/govuk-frontend.css"

class Header extends React.Component {

    componentWillMount() {
        this.changeRoute = this.changeRoute.bind(this);
        const path = this.props.location.pathname;
        window.addEventListener('resize', this.handleWindowSizeChange);
        this.state = {
            routerPath: path
        }
    }


    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({width: window.innerWidth});
    };

    changeRoute(path) {
        this.setState({routerPath: path});
        this.props.resetError();
        PubSub.publish("submission", {
            submission: false,
            message: null
        });
        this.props.history.replace(path);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.setState({routerPath: nextProps.location.pathname});
        }
    }


    render() {
        const {routerPath} = this.state;

        const pointerStyle = {cursor: 'pointer'};

        const isProcess = (routerPath) => {
            return routerPath === '/submissions' || routerPath === '/submission-start';
        };

        const navWidth = window.innerWidth <= 500 ? 'inherit' : '700px';

return      <div className="App">
<div className="govuk-width-container">
<div class="grid-row">

<div className="govuk-grid-column-two-thirds govuk-section-break--xl">
<main role="main" id="govuk-width-container" className="govuk-width-container" lang="en">

<p className="govuk-heading-l">Operational activity reporting</p>


{/* <div className="govuk-grid-row">
<div className="govuk-grid-column-one-quarter"> Signed in as  </div>
<div className="govuk-grid-column-one-quarter govuk-\!-font-weight-bold display: inline-block">  Gillian Armstrong. </div>
<div className="govuk-grid-column-one-quarter">  Sign out </div>
</div> */}

<label>Signed in as</label><label className="govuk-label--s"> Gillian Armstrong.</label>
<label className="govuk-!-margin-left-3"><a href="#">Sign out</a> </label>


<p className="govuk-label--m"><a href="#">Wednesday 20 October 2018</a></p>
<p className="govuk-label"> DS02F1 - Dover</p>
<hr/>

<p className="govuk-label--m"><a href="#">Wednesday 20 October 2018</a></p>
<p className="govuk-label"> DS02F1 - Dover</p>

<hr/>

<p>
<button className="govuk-button" type="submit">Add shift</button>
</p>




</main>

</div>

</div>
</div>

</div>
}
}


const mapDispatchToProps = dispatch => bindActionCreators({
    resetError: () => dispatch({type: errorActionTypes.RESET_ERROR})
}, dispatch);


export default withRouter(connect((state) => {
    return {}
}, mapDispatchToProps)(Header))