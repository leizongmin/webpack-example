'use strict';

/**
 * Webpack Example
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'
import Home from './Home';
import Detail from './Detail';

class NoMatch extends React.Component {
  render() {
    return <div>Not Found</div>;
  }
}

export default class App extends React.Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="topic/:id" component={Detail}/>
        <Route path="*" component={NoMatch}/>
      </Router>
    );
  }
}
