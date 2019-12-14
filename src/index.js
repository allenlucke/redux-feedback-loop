import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//default Feedback Object
const defaultFeedback = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: '',
};

//Reducers
const feedbackReducer = (state = defaultFeedback, action) => {
    if(action.type === 'ADD_FEELING_TO_FEEDBACK') {
        return{
            ...state,
            ...action.payload
        }
    }
    else if(action.type === 'ADD_UNDERSTANDING_TO_FEEDBACK') {
        return{
            ...state,
            ...action.payload
        }
    }
    else if(action.type === 'ADD_SUPPORT_TO_FEEDBACK') {
        return{
            ...state,
            ...action.payload
        }
    }
    else if(action.type === 'ADD_COMMENTS_TO_FEEDBACK') {
        return{
            ...state,
            ...action.payload
        }
    }
    return state;
}



const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger),
)


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
