import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';

class Review extends Component {

    render() {
        return (
            <div>
                <h2>Review Your Feedback</h2>
            </div>
        );
    }
}


export default connect(mapStoreToProps)(Review)