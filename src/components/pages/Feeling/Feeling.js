import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';

class Feeling extends Component {

    goToNext = (event) => {
        //Navigates to understanding
        this.props.history.push('/understanding')
    }

    render() {
        return (
            <div >
               <h2>How are you feeling today?</h2> 
               <div>
                   <button onClick={this.goToNext}>NEXT</button>
               </div>
            </div>
        );
    }

}


export default connect(mapStoreToProps)(Feeling)