import '../Config';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base';
import Amplify from 'aws-amplify';
import awsExports from 'Config/aws-exports';

import DebugConfig from '../Config/DebugConfig';
import RootContainer from './RootContainer';
import createStore from '../Redux';

import getTheme from '../../native-base-theme/components';
import cheffii from '../../native-base-theme/variables/cheffii';
// create our store
const store = createStore();

Amplify.configure({
  ...awsExports,
  API: {
    endpoints: [
      {
        name: 'cheffii-api-dev',
        endpoint: 'http://192.168.0.15:8080',
      },
    ],
  },
});

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(cheffii)}>
        <Provider store={store}>
          <RootContainer />
        </Provider>
      </StyleProvider>
    );
  }
}

// allow reactotron overlay for fast design in dev mode
export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App);
