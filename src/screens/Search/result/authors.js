/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import _ from 'lodash';

import {globalStyles} from 'global/styles';
import {AUTHORDETAIL} from 'global/constants';
import {ThemeContext} from 'tools/context/theme';
import ListAuthor from 'components/lists/authors';

export default function Authors({navigation, data}) {
  const {colors} = React.useContext(ThemeContext);

  if (_.get(data, 'total', 0) === 0) {
    return (
      <View
        style={[
          globalStyles.container,
          colors.container,
          {alignItems: 'center', justifyContent: 'center'},
        ]}>
        <Text style={[styles.nodata, colors.text]}>Không có dữ liệu</Text>
      </View>
    );
  }

  return (
    <View
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      <Text
        style={StyleSheet.compose(
          styles.result,
          colors.text,
        )}>
        {_.get(data, 'total', 0)} Result
      </Text>
      <ListAuthor
        search
        items={_.get(data, 'data', [])}
        handleDetail={id => navigation.navigate(AUTHORDETAIL, {id})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  result: {fontSize: 13, marginTop: 20, marginLeft: 20},
  nodata: {fontSize: 30},
});
