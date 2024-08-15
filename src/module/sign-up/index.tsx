import React from 'react';
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {
  ButtonPaper,
  NestedText,
  TextInputPaperForm,
  TextPaper,
} from '../../components';
import {useForm} from 'react-hook-form';
import {ISignUpForm, Navigation, SignUpForm} from '../../shared';
import {useNavigation} from '@react-navigation/native';
import {AUTHENTICATE_ROUTE} from '../../navigation/config';
import {yupResolver} from '@hookform/resolvers/yup';
import {signUpSchema} from '../../shared/validations';
import {useMutation} from '@tanstack/react-query';
import {getMeRequest, signUpRequest} from '../../api/auth/request.ts';
import {useHandleToken, useHandleUserInfo} from '../../state';

export const SignUpScreen = () => {
  const navigation = useNavigation<Navigation>();
  const setToken = useHandleToken(state => state.setToken);
  const setUser = useHandleUserInfo(state => state.setUser);
  const setIsLogin = useHandleToken(state => state.setIsLogin);
  const {
    control,
    formState: {isValid},
    handleSubmit,
  } = useForm<ISignUpForm>({
    defaultValues: new SignUpForm().toJSON(),
    resolver: yupResolver(signUpSchema),
    mode: 'onChange',
  });

  const getMe = useMutation({
    mutationFn: getMeRequest,
    onSuccess: res => {
      setUser({phone: res.data.phone, name: res.data.name});
      setIsLogin(true);
    },
  });

  const signUp = useMutation({
    mutationFn: signUpRequest,
    onSuccess: res => {
      setToken(res.data.token);
      getMe.mutate();
    },
  });

  const goToSignIn = () => {
    navigation.navigate(AUTHENTICATE_ROUTE.SIGN_IN);
  };

  const onSignUp = async (data: ISignUpForm) => {
    signUp.mutate(data);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <TextPaper style={styles.title}>Đăng Ký</TextPaper>
        <TextInputPaperForm
          label="Tên"
          control={control}
          name="name"
          mode="outlined"
        />
        <TextInputPaperForm
          label="Số Điện Thoại"
          control={control}
          name="phone"
          mode="outlined"
        />
        <TextInputPaperForm
          label="Mật Khẩu"
          control={control}
          name="password"
          mode="outlined"
          secureTextEntry
        />
        <TextInputPaperForm
          label="Xác Nhận Mật Khẩu"
          control={control}
          name="confirmPassword"
          mode="outlined"
          secureTextEntry
        />
        <ButtonPaper
          loading={signUp.isPending || getMe.isPending}
          onPress={handleSubmit(onSignUp)}
          disabled={!isValid}
          style={styles.button}
          mode="contained">
          Đăng Ký
        </ButtonPaper>
        <NestedText
          mainText={'Bạn Đã Có Tài Khoản?'}
          boldText={'Đăng Nhập'}
          onClickBoldText={goToSignIn}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '20@s',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: '30@vs',
    fontWeight: '700',
    marginBottom: '40@vs',
  },
  button: {
    marginTop: '30@vs',
  },
});
