'use strict';

/**
 * Webpack Example
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

import React from 'react';

export default class Pagination extends React.Component {

  render() {
    return (
      <nav style={{textAlign: 'center'}}>
        <ul className="pagination pagination-lg">
          <li className="disabled">
            <a href="#" aria-label="Previous"><span aria-hidden="true">&laquo; </span></a>
          </li>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li className="disabled">
            <a href="#" aria-label="Next"><span aria-hidden="true">&laquo; </span></a>
          </li>
        </ul>
      </nav>
    );
  }

}
