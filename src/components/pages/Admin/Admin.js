import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';

class Admin extends Component {
    componentDidMount() {
        this.getFeedback();
    }

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

    goHome = (event) => {
        //Navigates to the home page
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h2>Feedback Results</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Flagged</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                </table>
                <div>
                    <button onClick={this.goHome}>Go Home</button>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Admin);