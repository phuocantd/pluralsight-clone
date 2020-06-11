/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import {globalStyles} from 'global/styles';
import {COURSEDETAIL} from 'global/constants';
import {ThemeContext} from 'tools/context/theme';
import {softwareDevelopment} from 'data/home';
import Description from 'components/description';
import ListCourse from 'components/lists/courses';

export default function AuthorDetail({navigation}) {
  const {colors} = React.useContext(ThemeContext);

  const handleDetailCourse = () => navigation.navigate(COURSEDETAIL);

  return (
    <View
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      <ListCourse
        headerComponent={
          <View style={styles.container}>
            <Image
              style={styles.postrait}
              source={{
                uri:
                  'https://pluralsight.imgix.net/author/lg/deborah-kurata-v1.jpg?w=200',
              }}
            />
            <Text
              style={StyleSheet.compose(
                styles.name,
                colors.text,
              )}>
              Deborah Kurata
            </Text>
            <Text
              style={StyleSheet.compose(
                {alignSelf: 'center', marginBottom: 10},
                colors.text,
              )}>
              Plurasight Author
            </Text>
            <Button title="Follow" onPress={() => console.log('Follow')} />
            <Text
              style={StyleSheet.compose(
                {
                  fontSize: 13,
                  alignSelf: 'center',
                  marginTop: 10,
                  marginBottom: 20,
                },
                colors.text,
              )}>
              Follow to be notified when new courses are published
            </Text>
            <Description description="Deborah Kurata is a software developer, consultant, conference speaker, and Pluralsight author. Her courses include: Angular: Getting Started, Angular Routing, and Object-Oriented Programming Fundamentals in C#. For her work in support of software developers, she has been recognized with the Microsoft Most Valuable Professional (MVP) award, and is a Google Developer Expert (GDE)." />
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <IconFeather name="link-2" style={colors.icon} size={20} />
              <Text
                style={StyleSheet.compose(
                  {marginLeft: 10},
                  colors.text,
                )}>
                http://msmvps.com/blogs/deborahk
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <IconFontAwesome
                name="facebook-square"
                style={colors.icon}
                size={30}
              />
              <IconFontAwesome
                style={StyleSheet.compose(
                  {marginHorizontal: 10},
                  colors.icon,
                )}
                name="linkedin-square"
                size={30}
              />
              <IconFontAwesome name="twitter" style={colors.icon} size={30} />
            </View>
            <Text
              style={StyleSheet.compose(
                {fontSize: 20, marginVertical: 30},
                colors.text,
              )}>
              Course
            </Text>
          </View>
        }
        items={softwareDevelopment.listCourse}
        handleDetail={handleDetailCourse}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginHorizontal: 20},
  postrait: {
    marginTop: 30,
    height: 60,
    width: 60,
    borderRadius: 30,
    alignSelf: 'center',
  },
  text: {fontSize: 14, flex: 1},
  name: {alignSelf: 'center', fontSize: 25},
});
