import React from 'react';
import {View} from 'react-native';

import Contents from './contents';
import Transcript from './transcript';

export default function MyTabs({isContent}) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{backgroundColor: '#000', paddingHorizontal: 20}}>
      {isContent ? <Contents /> : <Transcript />}
    </View>
  );
}
