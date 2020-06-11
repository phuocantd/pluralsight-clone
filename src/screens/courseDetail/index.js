/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {ThemeContext} from 'tools/context/theme';
import AuthorInfo from './author';
import MoreInfo from './moreInfo';
import ButtonControl from './buttonControl';
import Video from './video';
import Description from 'components/description';
import ButtonItem from './buttonItem';
import ListVideo from './listVideo';
import {dataDetail} from 'data/courseDetail';

export default function CourseDetail({navigation}) {
  const {colors} = React.useContext(ThemeContext);

  const [data, setData] = useState(dataDetail);
  const [isContent, setIsContent] = useState(true);

  const handleBack = () => navigation.goBack();

  return (
    <View
      style={StyleSheet.compose(
        styles.container,
        colors.background2,
      )}>
      <View>
        <Video image={data.image} handleBack={handleBack} />
      </View>
      <ScrollView style={styles.info} stickyHeaderIndices={[1]}>
        <View style={{marginHorizontal: 20}}>
          <Text
            style={StyleSheet.compose(
              styles.title,
              colors.text,
            )}>
            {data.title}
          </Text>
          <View style={styles.authors}>
            {data.authors.map(author => (
              <AuthorInfo
                key={Math.random().toString()}
                name={author.name}
                image={author.image}
              />
            ))}
          </View>
          <View style={styles.moreInfo}>
            <MoreInfo
              level={data.level}
              updated={data.updated}
              duration={data.duration}
              rating={data.rating}
            />
          </View>
          <View style={styles.btnControl}>
            <ButtonControl />
          </View>
          <View style={styles.description}>
            <Description description={data.description} />
          </View>
          <View>
            <ButtonItem />
          </View>
        </View>
        <View>
          <View style={styles.tabs}>
            <View
              style={StyleSheet.compose(
                isContent ? styles.tabActive : styles.tab,
                colors.background2,
              )}>
              <Text
                onPress={() => setIsContent(true)}
                style={
                  isContent
                    ? StyleSheet.compose(
                        styles.textTabActive,
                        colors.textBtn,
                      )
                    : StyleSheet.compose(
                        styles.textTab,
                        colors.text,
                      )
                }>
                Contents
              </Text>
            </View>
            <View
              style={StyleSheet.compose(
                isContent ? styles.tabActive : styles.tab,
                colors.background2,
              )}>
              <Text
                onPress={() => setIsContent(false)}
                style={
                  !isContent
                    ? StyleSheet.compose(
                        styles.textTabActive,
                        colors.textBtn,
                      )
                    : StyleSheet.compose(
                        styles.textTab,
                        colors.text,
                      )
                }>
                Transcript
              </Text>
            </View>
          </View>
        </View>
        <ListVideo isContent={isContent} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  info: {flex: 1},
  title: {fontSize: 25},
  authors: {flexDirection: 'row'},
  moreInfo: {marginTop: 5},
  btnControl: {marginTop: 10},
  description: {marginTop: 20},
  tabs: {flexDirection: 'row'},
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 20,
  },
  tabActive: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 20,
  },
  textTab: {textTransform: 'uppercase', fontSize: 20},
  textTabActive: {textTransform: 'uppercase', fontSize: 20},
});
