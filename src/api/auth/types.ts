import {BaseResponse} from '../types.ts';

export interface SignInResponse extends BaseResponse {
  data: {
    token: string;
  };
}

export interface SignUpResponse extends BaseResponse {
  data: {
    token: string;
  };
}

export interface GetMeResponse extends BaseResponse {
  data: {
    name: string;
    phone: string;
  };
}
