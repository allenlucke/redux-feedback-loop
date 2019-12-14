import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';

class Review extends Component {

    onSubmit = (event) => {
        alert('Are you sure you want to Submit?');
        this.props.history.push('/');
    }
    render() {
        const feedbackInfo = this.props.store.feedbackReducer;
        return (
            <div>
                <h2>Review Your Feedback</h2>
                    <div>Feelings: {feedbackInfo.feeling}</div>
                    <div>Understanding: {feedbackInfo.understanding}</div>
                    <div>Support: {feedbackInfo.support}</div>
                    <div>Comments: {feedbackInfo.comments}</div>
                    <button onClick={this.onSubmit}>Submit Feedback</button>
            </div>
        );
    }
}


export default connect(mapStoreToProps)(Review);