'use strict';

import 'bootstrap-webpack';
import React from 'react';
import ReactDOM from 'react-dom';
import List from './component/List';

class App extends React.Component {
  render() {
    return (
      <div>
        <List />
      </div>
    );
  }
}

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);
ReactDOM.render(<App />, document.getElementById('app'));
