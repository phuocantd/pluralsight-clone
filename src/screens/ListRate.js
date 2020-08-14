/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import _ from 'lodash';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {ThemeContext} from 'src/tools/context/theme';
import {globalStyles} from 'src/global/styles';

export default function ListRate({route}) {
  const {ratings} = route.params;

  const {colors} = useContext(ThemeContext);

  const renderItem = ({item}) => (
    <View
      style={[
        colors.bgInput,
        {marginTop: 15, marginHorizontal: 20, padding: 10},
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{borderRadius: 25, width: 50, height: 50}}
          source={{
            uri: _.get(
              item,
              'user.avatar',
              'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png',
            ),
          }}
        />
        <Text style={{color: '#fff', marginLeft: 10, fontSize: 23}}>
          {_.get(item, 'user.name', 'Ẩn danh')}
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <MaterialCommunityIconsIcon
          color="#fff"
          size={20}
          name="format-float-none"
        />
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            marginLeft: 10,
            marginRight: 30,
          }}>
          {_.get(item, 'formalityPoint', 0)}
        </Text>
        <MaterialCommunityIconsIcon
          color="#fff"
          size={20}
          name="content-save-edit-outline"
        />
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            marginLeft: 10,
            marginRight: 30,
          }}>
          {_.get(item, 'contentPoint', 0)}
        </Text>
        <MaterialCommunityIconsIcon
          color="#fff"
          size={20}
          name="presentation"
        />
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            marginLeft: 10,
            marginRight: 30,
          }}>
          {_.get(item, 'presentationPoint', 0)}
        </Text>
      </View>
      <Text style={{color: '#fff', fontSize: 20, marginTop: 7}}>
        Nội dung: {_.get(item, 'content', '')}
      </Text>
    </View>
  );

  console.log('rating', ratings);
  return (
    <View style={[globalStyles.container, colors.container]}>
      <FlatList
        style={{flex: 1}}
        keyExtractor={item => item.id}
        data={_.get(ratings, 'ratingList', [])}
        renderItem={renderItem}
      />
    </View>
  );
}
