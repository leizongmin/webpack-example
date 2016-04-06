'use strict';

/**
 * Webpack Example
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

import React from 'react';
import apiClient from '../lib/api_client';
import List from './List';

export default class App extends React.Component {

  state = {};

  componentDidMount() {
    apiClient.getList({})
    .then(list => this.setState({list}))
    .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <List list={this.state.list}/>
      </div>
    );
  }
}
