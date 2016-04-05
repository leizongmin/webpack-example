'use strict';

/**
 * Webpack Example
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

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
    const list = this.state.list.map((item, i) => {
      return (
        <a href="#" className="list-group-item" key={i}>
          {item.title}
          <span className="badge">回复 {item.reply_count}</span>
          <span className="badge">阅读 {item.visit_count}</span>
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
