import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';
//Material-UI
import Button from '@material-ui/core/Button';


class FeedbackList extends Component {
    componentDidMount() {
        this.getFeedback();
    }

    //DELETE call
    deleteFeedback = (id) => {
        console.log(id)
        axios({
            method: 'DELETE',
            url: '/feedback/'+id,
        })
        .then((response) => {
            console.log(response);
            this.getFeedback();
        })
        .catch((err) => {
            console.warn(err);
        })
    }

    // GET call triggered by pageload
    getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        })
        .then((response) => {
            this.props.dispatch({
                type: 'GET_FEEDBACK',
                payload: response.data,
            })
        })
        .catch((err) => {
            console.warn(err);
        })
    }
   

    render() {
        const feedbackArray = this.props.store.getReducer.map((item, index) => {
            console.log(item.flagged)
            return (
                <tr key={index}>
                <td>{item.feeling}</td>
                <td>{item.understanding}</td>
                <td>{item.support}</td>
                <td>{item.comments}</td>
                {/* <td><Button variant="contained" color="primary">{item.flagged}</Button></td> */}
                <td>{item.date}</td>
                <td><Button variant="contained" color="secondary" onClick={(event) => this.deleteFeedback(item.id)}>Delete</Button></td>
                </tr>
            )
        })
        return (
            <tbody>
                {feedbackArray}
            </tbody>
        )
    }
}

export default connect(mapStoreToProps)(FeedbackList);