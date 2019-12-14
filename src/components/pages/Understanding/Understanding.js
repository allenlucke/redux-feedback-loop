import React, { Component } from './node_modules/react';
import { connect } from './node_modules/react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from './node_modules/axios';

class Understanding extends Component {

    render() {
        return (
            <div>

            </div>
        );
    }

}


export default connect(mapStoreToProps)(Understanding)