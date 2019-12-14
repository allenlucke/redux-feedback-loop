import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Success extends Component {

    goToHome = (event) => {
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