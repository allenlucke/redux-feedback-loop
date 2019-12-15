import React, { Component } from 'react';
//Style
import './App.css';
//Redux
import {connect} from 'react-redux';
import mapStoreToProps from '../redux/mapStoreToProps';
//Material-UI
import Button from '@material-ui/core/Button';
//React-Router
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../pages/Feeling/Feeling';
import Understanding from '../pages/Understanding/Understanding';
import Support from '../pages/Support/Support';
import Comments from '../pages/Comments/Comments';
import Review from '../pages/Review/Review'
import Home from '../pages/Home/Home';
import Success from '../pages/Success/Success';
import Admin from '../pages/Admin/Admin'



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
        <Button variant="contained" color="default"><Link to='/admin'>Admin</Link></Button>
        <Route path="/" exact component={Home} />
        <Route path="/feeling" component={Feeling} />
        <Route path="/understanding" component={Understanding} />
        <Route path="/support" component={Support} />
        <Route path="/comments" component={Comments} />
        <Route path="/review" component={Review} />
        <Route path="/success" component={Success} />
        <Route path="/admin" component={Admin} />
      </div>
      </Router>
    );
  }
}

export default connect(mapStoreToProps)(App);
