import React from 'react';
import {Button} from 'react-native-paper';

export type ButtonPaperProps = {} & React.ComponentProps<typeof Button>;

export const ButtonPaper = ({children, ...rest}: ButtonPaperProps) => {
  return <Button {...rest}>{children}</Button>;
};
