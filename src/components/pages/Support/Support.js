import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
//Material-UI
import Button from '@material-ui/core/Button';

class Support extends Component {

    state = {
        support: 0,
    }

    changeField = (event, infoKey) => {
        this.setState({
            [infoKey]: parseInt(event.target.value)
        });
    }

    goToNext = (event) => {
        event.preventDefault();

        this.props.dispatch({
            type: 'ADD_SUPPORT_TO_FEEDBACK',
            payload: this.state,
        })
        //Navigates to comments
        this.props.history.push('/comments')
    }

    goBack = (event) => {
        //Navigates to previous page
        this.props.history.push('/understanding');
    }

    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>
                <form onSubmit={this.goToNext}>

                   <label>
                       <input
                       type="radio"
                       name="rating"
                       value="1"
                       required
                       checked={this.state.support === 1}
                       onChange={(event) => this.changeField(event, 'support')}
                       />
                       <span>1</span>
                   </label>

                   <label>
                   <input
                       type="radio"
                       name="rating"
                       value="2"
                       checked={this.state.support === 2}
                       onChange={(event) => this.changeField(event, 'support')}
                       />
                       <span>2</span>
                    </label>

                    <label>
                   <input
                       type="radio"
                       name="rating"
                       value="3"
                       checked={this.state.support === 3}
                       onChange={(event) => this.changeField(event, 'support')}
                       />
                       <span>3</span>
                    </label>

                    <label>
                   <input
                       type="radio"
                       name="rating"
                       value="4"
                       checked={this.state.support === 4}
                       onChange={(event) => this.changeField(event, 'support')}
                       />
                       <span>4</span>
                    </label>

                    <label>
                   <input
                       type="radio"
                       name="rating"
                       value="5"
                       checked={this.state.support === 5}
                       onChange={(event) => this.changeField(event, 'support')}
                       />
                       <span>5</span>
                    </label>
                    <div>
                        <Button type="submit" variant="contained" color="primary">NEXT</Button>
                   </div>
               </form>
               <Button variant="contained" color="secondary" onClick={this.goBack}>Go Back</Button>
            </div>
        );
    }

}


export default connect(mapStoreToProps)(Support);