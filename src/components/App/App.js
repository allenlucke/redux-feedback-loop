import React, { Component } from 'react';
import axios from 'axios';
//Style
import './App.css';
//Redux
import {connect} from 'react-redux';
import mapStoreToProps from '../redux/mapStoreToProps';
//React-Router
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../pages/Feeling/Feeling';
import Understanding from '../pages/Understanding/Understanding';
import Support from '../pages/Support/Support';
import Comments from '../pages/Comments/Comments';
import Review from '../pages/Review/Review'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Route path="/" exact component={Feeling} />
        <Route path="/understanding" component={Understanding} />
        <Route path="/support" component={Support} />
        <Route path="/comments" component={Comments} />
        <Route path="/review" component={Review} />
      </div>
      </Router>
    );
  }
}

export default connect(mapStoreToProps)(App);
