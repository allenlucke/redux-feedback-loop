import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';

class Comments extends Component {

    goToNext = (event) => {
        //Navigates to review
        this.props.history.push('/review')
    }

    render() {
        return (
            <div>
                <h2>Any comments you want to leave?</h2>
                <div>
                    <button onClick={this.goToNext}>NEXT</button>
                </div>
            </div>
        );
    }

}


export default connect(mapStoreToProps)(Comments)