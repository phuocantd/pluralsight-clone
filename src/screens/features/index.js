import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';

import {dataProfessional} from 'data/home';
import {COURSEDETAIL} from 'global/constants';
import {ThemeContext} from 'tools/context/theme';
import {globalStyles} from 'global/styles';
import ListCourse from 'components/lists/courses';

export default function Feature({navigation}) {
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
          <View>
            <ImageBackground
              source={{
                uri:
                  'https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_165953143-686x371.jpeg',
              }}
              style={styles.imgBackground}>
              <TouchableOpacity
                style={styles.back}
                onPress={() => navigation.goBack()}>
                <IconIonicons name="md-arrow-back" size={35} color="#ccc" />
              </TouchableOpacity>
              <Text style={styles.title}>new releases</Text>
            </ImageBackground>
          </View>
        }
        items={dataProfessional.listCourse}
        handleDetail={handleDetailCourse}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imgBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  back: {position: 'absolute', left: 15, top: 15},
  title: {
    color: '#fff',
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
