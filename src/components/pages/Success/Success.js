import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Success extends Component {

    state = {
        feeling: 0,
        understanding: 0,
        support: 0,
        comments: ''
    }

    goToHome = (event) => {
        //resets feedback form
        this.props.dispatch({
            type: 'RESET_FEEDBACK_FORM',
            payload: this.state,
        });
        //Navigates back to the home page
        this.props.history.push('/')
    }

    render() {
        return(
            <div>
                <h2>Thank You!</h2>
                <h4>Your Feedback Has Been Received</h4>
                <button onClick={this.goToHome}>Leave New Feedback</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Success);