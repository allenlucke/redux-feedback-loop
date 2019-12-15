import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Comments extends Component {

    state = {
        comments: '',
    }

    changeField = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
    }

    goToNext = (event) => {
        event.preventDefault();

        this.props.dispatch({
            type: 'ADD_COMMENTS_TO_FEEDBACK',
            payload: this.state,
        })
        //Navigates to review
        this.props.history.push('/review')
    }

    goBack = (event) => {
        //Navigates to previous page
        this.props.history.push('/support');
    }


    render() {
        return (
            <div>
                <h2>Any comments you want to leave?</h2>
                <form onSubmit={this.goToNext}>
                    <input
                    type="text"
                    placeholder="Comments"
                    value={this.state.comments}
                    onChange={(event) => this.changeField(event, 'comments')}
                    />
                    <button>NEXT</button>
                </form>
                <button onClick={this.goBack}>Go Back</button>
            </div>
        );
    }

}


export default connect(mapStoreToProps)(Comments)