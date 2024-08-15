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
import {ISignInForm, Navigation, SignInForm} from '../../shared';
import {useNavigation} from '@react-navigation/native';
import {AUTHENTICATE_ROUTE} from '../../navigation/config';
import {yupResolver} from '@hookform/resolvers/yup';
import {signInSchema} from '../../shared/validations';
import {useMutation} from '@tanstack/react-query';
import {getMeRequest, signInRequest} from '../../api/auth/request.ts';
import {useHandleToken, useHandleUserInfo} from '../../state';

export const SignInScreen = () => {
  const navigation = useNavigation<Navigation>();
  const setToken = useHandleToken(state => state.setToken);
  const setUser = useHandleUserInfo(state => state.setUser);
  const setIsLogin = useHandleToken(state => state.setIsLogin);

  const {
    control,
    formState: {isValid},
    handleSubmit,
  } = useForm<ISignInForm>({
    defaultValues: new SignInForm().toJSON(),
    resolver: yupResolver(signInSchema),
    mode: 'onChange',
  });

  const getMe = useMutation({
    mutationFn: getMeRequest,
    onSuccess: res => {
      setUser({phone: res.data.phone, name: res.data.name});
      setIsLogin(true);
    },
  });

  const signIn = useMutation({
    mutationFn: signInRequest,
    onSuccess: res => {
      setToken(res.data.token);
      getMe.mutate();
    },
  });

  const goToSignUp = () => {
    navigation.navigate(AUTHENTICATE_ROUTE.SIGN_UP);
  };

  const onSignIn = async (data: ISignInForm) => {
    signIn.mutate({phone: data.phone, password: data.password});
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <TextPaper style={styles.title}>Đăng Nhập</TextPaper>
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
        <ButtonPaper
          loading={signIn.isPending || getMe.isPending}
          onPress={handleSubmit(onSignIn)}
          disabled={!isValid}
          style={styles.button}
          mode="contained">
          Đăng Nhập
        </ButtonPaper>
        <NestedText
          mainText={'Bạn Không Có Tài Khoản?'}
          boldText={' Đăng Ký'}
          onClickBoldText={goToSignUp}
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
