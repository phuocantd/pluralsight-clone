import React, {useContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import _ from 'lodash';

import {ThemeContext} from 'tools/context/theme';
import {AuthContext} from 'src/tools/context/auth';
import {getSubtitle} from 'api/lesson';

export default function Transcript({lesson}) {
  const {colors} = React.useContext(ThemeContext);
  const {state} = useContext(AuthContext);

  const [trans, setTrans] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await getSubtitle(state.token, lesson.courseId, lesson.id);
      console.log(_.get(res, 'data.payload', ''));
      setTrans(_.get(res, 'data.payload', ''));
    } catch (error) {}
  };

  return (
    <View>
      {/* <Text
        style={StyleSheet.compose(
          {fontSize: 23},
          colors.text,
        )}>
        Architecting for Reliability on AWS
      </Text> */}
      <Text
        style={StyleSheet.compose(
          {fontSize: 20, marginVertical: 10},
          colors.text,
        )}>
        {lesson.name}
      </Text>
      <Text style={colors.text}>{trans}</Text>
    </View>
  );
}
