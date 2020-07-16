/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';

import {globalStyles} from 'global/styles';
import {COURSEDETAIL} from 'global/constants';
import {ThemeContext} from 'tools/context/theme';
// import {softwareDevelopment} from 'data/home';
import Description from 'components/description';
import ListCourse from 'components/lists/courses';
import {getInstructor} from 'api/instructor';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Loading from 'src/components/Loading';

export default function AuthorDetail({navigation, route}) {
  const {id} = route.params;
  const {colors} = React.useContext(ThemeContext);

  const [loading, setLoading] = useState(true);
  const [author, setAuthor] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const res = await getInstructor(id);
      setAuthor(_.get(res, 'data.payload', {}));
      setLoading(false);
    };

    loadData();
  }, [id]);

  const handleDetailCourse = idCourse =>
    navigation.navigate(COURSEDETAIL, {id: idCourse});

  if (loading) {
    return <Loading />;
  }

  return (
    <View
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      <ListCourse
        headerComponent={
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ImageView', {
                  file: {fileName: author.name, uri: author.avatar},
                })
              }>
              <Image style={styles.postrait} source={{uri: author.avatar}} />
            </TouchableOpacity>
            <Text
              style={StyleSheet.compose(
                styles.name,
                colors.text,
              )}>
              {author.name}
            </Text>
            <Text
              style={StyleSheet.compose(
                {alignSelf: 'center', marginBottom: 10},
                colors.text,
              )}>
              {`Major: ${author.major}`}
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
            <Description description={author.intro} />
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <IconFeather name="link-2" style={colors.icon} size={20} />
              <Text
                style={StyleSheet.compose(
                  {marginLeft: 10},
                  colors.text,
                )}>
                {author.email}
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <IconFeather name="phone" style={colors.icon} size={20} />
              <Text
                style={StyleSheet.compose(
                  {marginLeft: 10},
                  colors.text,
                )}>
                {author.phone}
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
            {!_.isEmpty(author.courses) && (
              <Text
                style={StyleSheet.compose(
                  {fontSize: 20, marginVertical: 30},
                  colors.text,
                )}>
                Course
              </Text>
            )}
          </View>
        }
        items={author.courses}
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
