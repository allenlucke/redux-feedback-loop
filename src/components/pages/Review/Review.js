import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';
//Material-UI
import Button from '@material-ui/core/Button';

class Review extends Component {

    //POST to server
    postFeedback() {
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.store.feedbackReducer
        })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.warn(err);
        })
    }

    onSubmit = (event) => {
        alert('Are you sure you want to Submit? You will not be able to edit your feedback after submittal');
        this.postFeedback();
        //Navigates to success page
        this.props.history.push('/success');
    }

    goBack = (event) => {
        //Navigates to previous page
        this.props.history.push('/comments');
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
                    <Button variant="contained" color="primary" onClick={this.onSubmit}>Submit Feedback</Button>
                    <Button variant="contained" color="secondary" onClick={this.goBack}>Go Back</Button>
            </div>
        );
    }
}


export default connect(mapStoreToProps)(Review);