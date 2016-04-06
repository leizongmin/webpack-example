'use strict';

/**
 * Webpack Example
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

import React from 'react';
import {Link} from 'react-router';

export default class List extends React.Component {

  render() {
    const list = Array.isArray(this.props.list) ? this.props.list : [];
    return (
      <ul className="list-group">
        {list.map((item, i) => {
          return (
            <Link className="list-group-item" key={i} to={`/topic/${item.id}`}>
              {item.title}
              <span className="badge">
                <i className="glyphicon glyphicon-eye-open"></i> {item.visit_count}
                &nbsp;&nbsp;
                <i className="glyphicon glyphicon-edit"></i>{item.reply_count}
              </span>
            </Link>
          );
        })}
      </ul>
    );
  }

}
