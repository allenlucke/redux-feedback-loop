import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
//Material-UI
import Button from '@material-ui/core/Button';

class Feeling extends Component {
    
    state = {
        feeling: 0,
    }

    changeField = (event, infoKey) => {
        this.setState({
            [infoKey]: parseInt(event.target.value)
        });
    }

    goToNext = (event) => {
        event.preventDefault();
        //dispatched feeling to feedback reducer
        this.props.dispatch({
            type: 'ADD_FEELING_TO_FEEDBACK',
            payload: this.state,
        });
        //Navigates to understanding
        this.props.history.push('/understanding')
    }

    goBack = (event) => {
        //Navigates to previous page
        this.props.history.push('/');
    }

    render() {
        return (
            <div >
               <h2>How are you feeling today?</h2> 
               <form onSubmit={this.goToNext}>

                   <label>
                       <input
                       type="radio"
                       name="rating"
                       value="1"
                       required
                       checked={this.state.feeling === 1}
                       onChange={(event) => this.changeField(event, 'feeling')}
                       />
                       <span>1</span>
                   </label>

                   <label>
                   <input
                       type="radio"
                       name="rating"
                       value="2"
                       checked={this.state.feeling === 2}
                       onChange={(event) => this.changeField(event, 'feeling')}
                       />
                       <span>2</span>
                    </label>

                    <label>
                   <input
                       type="radio"
                       name="rating"
                       value="3"
                       checked={this.state.feeling === 3}
                       onChange={(event) => this.changeField(event, 'feeling')}
                       />
                       <span>3</span>
                    </label>

                    <label>
                   <input
                       type="radio"
                       name="rating"
                       value="4"
                       checked={this.state.feeling === 4}
                       onChange={(event) => this.changeField(event, 'feeling')}
                       />
                       <span>4</span>
                    </label>

                    <label>
                   <input
                       type="radio"
                       name="rating"
                       value="5"
                       checked={this.state.feeling === 5}
                       onChange={(event) => this.changeField(event, 'feeling')}
                       />
                       <span>5</span>
                    </label>
                    <div>
                        <Button variant="contained" color="secondary" onClick={this.goBack}>Go Back</Button>
                        <Button type="submit" variant="contained" color="primary" >NEXT</Button>
                   </div>
               </form>
               
            </div>
        );
    }

}


export default connect(mapStoreToProps)(Feeling)