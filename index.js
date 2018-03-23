import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from "react-redux";

const Application = () => (
  <Provider>
    <App />
  </Provider>
)

AppRegistry.registerComponent('Taxi', () => Application);
