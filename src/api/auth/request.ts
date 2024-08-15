import {ISignInForm, ISignUpForm} from '../../shared';
import {GetMeResponse, SignInResponse, SignUpResponse} from './types.ts';
import {waitFor} from '../mock.ts';
import {getMeResponse} from './mock.ts';

export const signInRequest = async (
  body: ISignInForm,
): Promise<SignInResponse> => {
  await waitFor(3000);
  return {
    message: 'Đăng nhập thành công!',
    data: {
      token: `${body.phone}-${body.password}`,
    },
  };
};

export const signUpRequest = async (
  body: ISignUpForm,
): Promise<SignUpResponse> => {
  await waitFor(3000);
  return {
    message: 'Đăng nhập thành công!',
    data: {
      token: `${body.phone}-${body.password}`,
    },
  };
};

export const getMeRequest = async (): Promise<GetMeResponse> => {
  await waitFor(3000);
  return getMeResponse;
};
