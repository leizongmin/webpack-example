'use strict';

/**
 * Webpack Example
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

import React from 'react';
import apiClient from '../lib/api_client';
import List from './List';
import Pagination from './Pagination';

export default class Detail extends React.Component {

  state = {};

  componentDidMount() {
    apiClient.getDetail(this.props.params.id)
      .then(topic => this.setState({topic}))
      .catch(err => console.error(err));
  }

  render() {
    const topic = this.state.topic;
    if (!topic) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>{topic.title}</h1>
        <section dangerouslySetInnerHTML={{__html: topic.content}}></section>
      </div>
    );
  }
}
