import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';

class FeedbackList extends Component {

    render() {
        const feedbackArray = this.props.store.getReducer.map((item, index) => {
            return (
                <tr key={index}>
                <td>{item.feeling}</td>
                <td>{item.understanding}</td>
                <td>{item.support}</td>
                <td>{item.comments}</td>
                <td>{item.flagged}</td>
                <td>{item.date}</td>
                <td>Delete</td>
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