import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthenticationState {
  token: string;
  isLogin: boolean;
  setToken: (newToken: string) => void;
  setIsLogin: (newIsLogin: boolean) => void;
}

interface UserInfo {
  name: string;
  phone: string;
}

interface UserInfoState {
  user: UserInfo;
  setUser: (newUserInfo: UserInfo) => void;
}

export const useHandleToken = create(
  persist<AuthenticationState>(
    set => ({
      token: '',
      isLogin: false,
      setToken: newToken => set(() => ({token: newToken})),
      setIsLogin: newIsLogin => set(() => ({isLogin: newIsLogin})),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export const useHandleUserInfo = create<UserInfoState>(set => ({
  user: {
    phone: '',
    name: '',
  },
  setUser: newUser => set(() => ({user: newUser})),
}));
