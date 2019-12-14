import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Home extends Component {

    goToNext = (event) => {
        //Navigates to feeling page
        this.props.history.push('/feeling')
    }

    render() {
        return(
            <div>
                <h2>Feedback Homepage</h2>
                <button onClick={this.goToNext}>Start Feedback</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Home);