import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import UserForm from './components/UserForm/userForm';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <UserForm />
        </div>
      </Provider>
    )
  }
}