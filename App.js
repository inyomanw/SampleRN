/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HelloWorld from './src/HelloWorld'
import State from './src/State'
import StyleSheetTest from './src/StyleSheet'
import RNButton from './src/RNButton'
import HomeScreen from './src/HomeScreen'
import DetailsScreen from './src/DetailsScreen'
import GojekHome from './src/GojekHome'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    RnButton: RNButton,
    HomeGojek: GojekHome,
  },
  {
    initialRouteName: 'HomeGojek',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
