/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import { createAppContainer } from 'react-navigation';
import MainSwitchNavigator from './app/navigators/mainSwitchNavigator';

const AppContainer = createAppContainer(MainSwitchNavigator);

const App = () => {
  return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );  
};

export default App;
