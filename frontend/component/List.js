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

    if (!window.CCC) window.CCC = 0;
    console.log('load -', new Date(), window.CCC++);
  }

  render() {
    const list = this.state.list.map(item => {
      return (
        <a href="#" className="list-group-item" key={item.id}>
          {item.title}
          <span className="badge">{item.reply_count}</span>
        </a>
      );
    });
    return (
      <ul className="list-group">
        {list}
      </ul>
    );
  }

}
