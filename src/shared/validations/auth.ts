import * as yup from 'yup';
import {phoneRegExp} from '../regex.ts';

const phone = yup
  .string()
  .required('Số điện thoại là bắt buộc!')
  .matches(phoneRegExp, 'Số điện thoại không hợp lệ');

const password = yup
  .string()
  .required('Mật khẩu là bắt buộc!')
  .min(8, 'Mật khẩu phải dài ít tối thiểu 8 kí tự!')
  .matches(/[0-9]/, 'Mật khẩu phải bao gồm 1 chữ số!')
  .matches(/[a-z]/, 'Mật khẩu phải bao gồm 1 chữ cái viết thường!')
  .matches(/[A-Z]/, 'Mật khẩu phải bao gồm 1 chữ cái viết hoa!');

export const signInSchema = yup.object().shape({
  phone: phone,
  password: password,
});

export const signUpSchema = yup.object().shape({
  name: yup.string().required('Tên là bắt buộc!'),
  phone: phone,
  password: password,
  confirmPassword: password.oneOf(
    [yup.ref('password')],
    'Mật khẩu không trùng nhau!',
  ),
});
