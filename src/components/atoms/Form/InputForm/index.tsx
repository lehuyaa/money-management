import React from 'react';
import {TextInputPaper, TextInputPaperProps} from '../../Input';
import {Control, Controller} from 'react-hook-form';
import {HelperText} from 'react-native-paper';
import {ScaledSheet} from 'react-native-size-matters';
import {View} from 'react-native';

export type TextInputPaperFormProps = {
  control: Control<any>;
  name: string;
} & TextInputPaperProps;

export const TextInputPaperForm = (props: TextInputPaperFormProps) => {
  const {control, name, ...rest} = props;

  return (
    <Controller
      control={control}
      render={({field: {onChange, onBlur, value}, fieldState}) => (
        <View style={styles.input}>
          <TextInputPaper
            {...rest}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
          {fieldState.error?.message && (
            <HelperText type="error" visible={!!fieldState.error?.message}>
              {fieldState.error?.message}
            </HelperText>
          )}
        </View>
      )}
      name={name}
    />
  );
};

const styles = ScaledSheet.create({
  input: {
    marginBottom: '12@vs',
  },
});
