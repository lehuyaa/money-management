import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AUTHENTICATE_ROUTE} from './config';
import {SignInScreen, SignUpScreen} from '../module';
import React from 'react';

const MainStack = createNativeStackNavigator();

const AuthStack = () => (
  <MainStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <MainStack.Screen
      name={AUTHENTICATE_ROUTE.SIGN_IN}
      component={SignInScreen}
    />
    <MainStack.Screen
      name={AUTHENTICATE_ROUTE.SIGN_UP}
      component={SignUpScreen}
    />
  </MainStack.Navigator>
);

export default AuthStack;
