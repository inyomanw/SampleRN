/* eslint-disable */
/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);



import { AppRegistry } from "react-native";
import React from "react";
import AppRedux from './redux/App';
import App from './App'
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import configureStore from './redux/stores/store'

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
    {/* <AppRedux /> */}
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);