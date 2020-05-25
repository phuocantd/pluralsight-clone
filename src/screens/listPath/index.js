import React from 'react';
import {View} from 'react-native';

import {globalStyles} from 'global/styles';
import {PATHDETAIL} from 'global/constants';
import ListPath from 'components/lists/paths';

export default function ListPathScreen({route, navigation}) {
  const {items} = route.params;

  const handleDetailPath = () =>
    navigation.navigate(PATHDETAIL, {title: 'Angular denver 2019'});

  return (
    <View style={globalStyles.container}>
      <ListPath items={items} handleDetail={handleDetailPath} />
    </View>
  );
}
