'use strict';

import React from 'react';
import apiClient from '../lib/api_client';

export default class List extends React.Component {

  state = {
    list: [],
  };

  componentDidMount() {
    apiClient.getList({})
    .then(list => this.setState({list}))
    .catch(err => console.error(err));
  }

  render() {
    const list = this.state.list.map(item => {
      return <a href="#" className="list-group-item" key={item.id}>{item.title}</a>;
    });
    return (
      <ul class="list-group">
        {list}
      </ul>
    );
  }

}
