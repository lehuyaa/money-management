import React from 'react';
import {TextInput} from 'react-native-paper';

export type TextInputPaperProps = {} & React.ComponentProps<typeof TextInput>;

export const TextInputPaper = (props: TextInputPaperProps) => {
  return <TextInput {...props} />;
};


