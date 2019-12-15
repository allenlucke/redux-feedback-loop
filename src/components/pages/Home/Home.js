import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
//Material-UI
import Button from '@material-ui/core/Button';

class Home extends Component {

    goToNext = (event) => {
        //Navigates to feeling page
        this.props.history.push('/feeling')
    }

    render() {
        return(
            <div>
                <h2>Feedback Homepage</h2>
                <div>
                    <Button variant="contained" color="primary" onClick={this.goToNext}>Start Feedback</Button>
                </div>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Home);