import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import {globalStyles} from 'global/styles';
import {COURSEDETAIL} from 'global/constants';
import {dataProfessional} from 'data/home';
import ListCourse from 'components/lists/courses';

export default function Courses({navigation}) {
  const [timeFilter, setTimeFilter] = useState('Newest');

  const handleDetailCourse = () => navigation.navigate(COURSEDETAIL);
  return (
    <View style={globalStyles.container}>
      <Text style={styles.selectLevel}>Skill level</Text>
      <View style={styles.info}>
        <Text style={styles.result}>
          {dataProfessional.listCourse.length} Results
        </Text>
        <Menu style={styles.time} onSelect={value => setTimeFilter(value)}>
          <MenuTrigger>
            <Text style={styles.result}>{timeFilter}</Text>
          </MenuTrigger>
          <MenuOptions
            customStyles={{
              optionText: {color: '#fff', fontSize: 20, margin: 10},
              optionsContainer: {
                backgroundColor: '#0D0F12',
                width: 220,
              },
            }}>
            <MenuOption value="Newest" text="Newest" />
            <MenuOption value="Relevance" text="Relevance" />
          </MenuOptions>
        </Menu>
      </View>
      <ListCourse
        items={dataProfessional.listCourse}
        handleDetail={handleDetailCourse}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  selectLevel: {
    color: '#ccc',
    fontSize: 13,
    marginTop: 20,
    marginLeft: 20,
  },
  info: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 20,
  },
  result: {color: '#ccc', fontSize: 13},
  time: {color: '#fff'},
});
