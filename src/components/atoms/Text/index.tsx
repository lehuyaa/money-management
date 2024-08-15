import React from 'react';
import {Text} from 'react-native-paper';

export type TextPaperProps = {} & React.ComponentProps<typeof Text>;

export const TextPaper = ({children, ...rest}: TextPaperProps) => {
  return <Text {...rest}>{children}</Text>;
};
