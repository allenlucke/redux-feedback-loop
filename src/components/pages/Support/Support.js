import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';

class Support extends Component {

    goToNext = (event) => {
        //Navigates to comments
        this.props.history.push('/comments')
    }

    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>
                <div>
                    <button onClick={this.goToNext}>NEXT</button>
                </div>
            </div>
        );
    }

}


export default connect(mapStoreToProps)(Support)