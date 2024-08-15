import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppTab} from './BottomTabNavigation.tsx';
import React from 'react';
import {APP_ROUTE} from './config';

const Stack = createNativeStackNavigator();

export const AppStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={APP_ROUTE.MAIN_TAB} component={AppTab} />
  </Stack.Navigator>
);
