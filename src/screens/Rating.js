/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import _ from 'lodash';

import {ThemeContext} from 'src/tools/context/theme';
import {globalStyles} from 'global/styles';
import {ratingCourse} from 'src/api/course';
import {AuthContext} from 'tools/context/auth';

export default function Rating({route}) {
  const {id} = route.params;

  const {colors} = useContext(ThemeContext);
  const {state} = useContext(AuthContext);

  const [formalityPoint, setFormalityPoint] = useState(2.5);
  const [contentPoint, setContentPoint] = useState(2.5);
  const [presentationPoint, setPresentationPoint] = useState(2.5);
  const [content, setContent] = useState('');

  const onrating = async () => {
    try {
      const res = await ratingCourse(
        state.token,
        id,
        formalityPoint,
        contentPoint,
        presentationPoint,
        content,
      );
      if (_.get(res, 'data.message', null) === 'OK') {
        ToastAndroid.show('Đánh giá thành công', ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show(
        _.get(error, 'response.data.message', 'Đánh giá thất bại'),
        ToastAndroid.SHORT,
      );
    }
  };

  return (
    <ScrollView
      style={[
        globalStyles.container,
        colors.container,
        {paddingHorizontal: 20},
      ]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text style={[colors.text, {fontSize: 20, marginRight: 10}]}>
          Hình thức:
        </Text>
        <StarRating
          starSize={40}
          containerStyle={{justifyContent: 'center'}}
          disabled={false}
          emptyStar={'ios-star-outline'}
          fullStar={'ios-star'}
          halfStar={'ios-star-half'}
          iconSet={'Ionicons'}
          maxStars={5}
          rating={formalityPoint}
          selectedStar={rating => setFormalityPoint(rating)}
          fullStarColor={'#FAD000'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text style={[colors.text, {fontSize: 20, marginRight: 10}]}>
          Nội dung:
        </Text>
        <StarRating
          starSize={40}
          containerStyle={{justifyContent: 'center'}}
          disabled={false}
          emptyStar={'ios-star-outline'}
          fullStar={'ios-star'}
          halfStar={'ios-star-half'}
          iconSet={'Ionicons'}
          maxStars={5}
          rating={contentPoint}
          selectedStar={rating => setContentPoint(rating)}
          fullStarColor={'#FAD000'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text style={[colors.text, {fontSize: 20, marginRight: 10}]}>
          Trình bày:
        </Text>
        <StarRating
          starSize={40}
          containerStyle={{justifyContent: 'center'}}
          disabled={false}
          emptyStar={'ios-star-outline'}
          fullStar={'ios-star'}
          halfStar={'ios-star-half'}
          iconSet={'Ionicons'}
          maxStars={5}
          rating={presentationPoint}
          selectedStar={rating => setPresentationPoint(rating)}
          fullStarColor={'#FAD000'}
        />
      </View>
      <TextInput
        multiline
        placeholder="Nhập nhận xét"
        placeholderTextColor={colors.icon.color}
        onChangeText={text => setContent(text)}
        style={[{borderWidth: 1, marginTop: 20}, colors.btn, colors.text]}
      />
      <TouchableOpacity
        onPress={() => onrating()}
        style={[
          colors.bgBtn,
          {marginTop: 20, alignItems: 'center', padding: 10, borderRadius: 50},
        ]}>
        <Text style={{color: '#fff', fontSize: 20}}>Send</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
