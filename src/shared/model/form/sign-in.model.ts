export interface ISignInForm {
  phone: string;
  password: string;
}

export class SignInForm implements ISignInForm {
  phone: string = '';
  password: string = '';

  constructor(data?: ISignInForm) {
    if (data) {
      Object.assign(this, data);
    }
  }

  toJSON(): ISignInForm {
    return {
      ...this,
    };
  }
}
