import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';

class Admin extends Component {

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default connect(mapStoreToProps)(Admin);