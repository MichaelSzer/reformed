/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import GameConfigurationScreen from './app/screens/gameConfiguration';
import { Provider } from 'react-redux';
import store from './app/redux/store';

const App = () => {
  return (
      <Provider store={store}>
        <GameConfigurationScreen />
      </Provider>
    );  
};

export default App;
