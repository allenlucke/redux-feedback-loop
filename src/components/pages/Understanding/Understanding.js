import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';

class Understanding extends Component {

    goToNext = (event) => {
        //Navigates to support
        this.props.history.push('/support')
    }

    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                <div>
                    <button onClick={this.goToNext}>NEXT</button>
                </div>
            </div>
        );
    }

}


export default connect(mapStoreToProps)(Understanding)