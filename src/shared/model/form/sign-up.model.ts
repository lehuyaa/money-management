export interface ISignUpForm {
  phone: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export class SignUpForm implements ISignUpForm {
  phone: string = '';
  password: string = '';
  name: string = '';
  confirmPassword: string = '';

  constructor(data?: ISignUpForm) {
    if (data) {
      Object.assign(this, data);
    }
  }

  toJSON(): ISignUpForm {
    return {
      ...this,
    };
  }
}
