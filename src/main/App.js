import React, { Component } from 'react';
import Menu from '../containers/menu/menu.jsx'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Routes />
      </div>
    );
  }
}
export default App;
