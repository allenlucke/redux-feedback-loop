import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
//Material-UI
import Button from '@material-ui/core/Button';


class FeedbackList extends Component {

    render() {
        const feedbackArray = this.props.store.getReducer.map((item, index) => {
            console.log(item.flagged)
            return (
                <tr key={index}>
                <td>{item.feeling}</td>
                <td>{item.understanding}</td>
                <td>{item.support}</td>
                <td>{item.comments}</td>
                <td><button>{item.flagged}</button></td>
                <td>{item.date}</td>
                <td><Button variant="contained" color="secondary">Delete</Button></td>
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