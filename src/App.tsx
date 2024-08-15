/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './navigation';
import {PaperProvider} from 'react-native-paper';
import React from 'react';

function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
