'use strict';

/**
 * Webpack Example
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

import 'bootstrap-webpack';
import React from 'react';
import ReactDOM from 'react-dom';
import './style/test.css';
import App from './component/App';

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);
ReactDOM.render(<App />, document.getElementById('app'));
