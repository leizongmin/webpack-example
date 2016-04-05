import 'bootstrap-webpack';
import React from 'react';
import ReactDOM from 'react-dom';
import apiClient from './lib/api_client';

class App extends React.Component {
  render() {
    return <h1>hello</h1>;
  }
}

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);
ReactDOM.render(<App />, document.getElementById('app'));


const print = console.log.bind(console);
apiClient.getList({}).then(print).catch(print);
