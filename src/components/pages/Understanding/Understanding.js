import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Understanding extends Component {

    state = {
        understanding: 0,
    }

    changeField = (event, infoKey) => {
        this.setState({
            [infoKey]: parseInt(event.target.value)
        });
    }

    goToNext = (event) => {
        event.preventDefault();

        this.props.dispatch({
            type: 'ADD_UNDERSTANDING_TO_FEEDBACK',
            payload: this.state,
        })
        //Navigates to support
        this.props.history.push('/support')
    }

    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                <form onSubmit={this.goToNext}>

                   <label>
                       <input
                       type="radio"
                       name="rating"
                       value="1"
                       required
                       checked={this.state.understanding === 1}
                       onChange={(event) => this.changeField(event, 'understanding')}
                       />
                       <span>1</span>
                   </label>

                   <label>
                   <input
                       type="radio"
                       name="rating"
                       value="2"
                       checked={this.state.understanding === 2}
                       onChange={(event) => this.changeField(event, 'understanding')}
                       />
                       <span>2</span>
                    </label>

                    <label>
                   <input
                       type="radio"
                       name="rating"
                       value="3"
                       checked={this.state.understanding === 3}
                       onChange={(event) => this.changeField(event, 'understanding')}
                       />
                       <span>3</span>
                    </label>

                    <label>
                   <input
                       type="radio"
                       name="rating"
                       value="4"
                       checked={this.state.understanding === 4}
                       onChange={(event) => this.changeField(event, 'understanding')}
                       />
                       <span>4</span>
                    </label>

                    <label>
                   <input
                       type="radio"
                       name="rating"
                       value="5"
                       checked={this.state.understanding === 5}
                       onChange={(event) => this.changeField(event, 'understanding')}
                       />
                       <span>5</span>
                    </label>

                   <button>NEXT</button>
               </form>
            </div>
        );
    }

}


export default connect(mapStoreToProps)(Understanding)