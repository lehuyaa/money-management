import React from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {TextPaper} from '../../../components';

interface Props {
  onClickBoldText?: () => void;
  mainText: string;
  boldText: string;
}

export const NestedText = (props: Props) => {
  const {onClickBoldText, mainText, boldText} = props;

  return (
    <View style={styles.layout}>
      <TextPaper style={styles.mainText}>
        {mainText}{' '}
        <TextPaper
          onPress={onClickBoldText}
          style={[styles.mainText, styles.boldText]}>
          {boldText}
        </TextPaper>
      </TextPaper>
    </View>
  );
};

const styles = ScaledSheet.create({
  layout: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    marginTop: '40@vs',
  },
  mainText: {
    fontSize: '12@vs',
    fontWeight: '500',
  },
  boldText: {
    fontWeight: '500',
  },
});
