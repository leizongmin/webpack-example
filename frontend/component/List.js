'use strict';

/**
 * Webpack Example
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

import React from 'react';

export default class List extends React.Component {

  render() {
    const list = Array.isArray(this.props.list) ? this.props.list : [];
    return (
      <ul className="list-group">
        {list.map((item, i) => {
          return (
            <a href="#" className="list-group-item" key={i}>
              {item.title}
              <span className="badge">回复 {item.reply_count}</span>
              <span className="badge">阅读 {item.visit_count}</span>
            </a>
          );
        })}
      </ul>
    );
  }

}
