import React from 'react';
import AuthStack from './AuthStack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {useHandleToken} from '../state';
import {AppStack} from './AppStack.tsx';

interface Props {}

export const RootStack = (props: Props) => {
  const {} = props;
  const queryClient = new QueryClient();

  const isLogin = useHandleToken(state => state.isLogin);

  return (
    <QueryClientProvider client={queryClient}>
      {isLogin ? <AppStack /> : <AuthStack />}
    </QueryClientProvider>
  );
};
