/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Alert,
} from 'react-native';
import _ from 'lodash';

import {ThemeContext} from 'tools/context/theme';
// import AuthorInfo from './author';
import MoreInfo from './moreInfo';
import ButtonControl from './buttonControl';
import Video from './video';
import Description from 'components/description';
import ButtonItem from './buttonItem';
import ListVideo from './listVideo';
import {getCourseDetail} from 'api/course';
import Loading from 'components/Loading';
import {Stores} from 'src/tools/context/stores';

export default function CourseDetail({navigation, id}) {
  const {colors} = useContext(ThemeContext);
  const {profile} = useContext(Stores);
  // const {id} = route.params;

  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const [data, setData] = useState({});
  const [isContent, setIsContent] = useState(true);
  const [curLesson, setCurLesson] = useState({});

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = async cb => {
    try {
      const res = await getCourseDetail(id, profile.id);
      setData(_.get(res, 'data.payload', {}));
      const sections = _.get(res, 'data.payload.section[0]', {}) || {};
      setCurLesson(_.get(sections, 'lesson[0]', {}) || {});
      setLoading(false);
      console.log('course detail', _.get(res, 'data.payload', {}));
      cb && cb();
    } catch (error) {
      console.log('ERR:', error);
      Alert.alert(
        'Warning',
        _.get(error, 'response.data.message', 'Truy cập không thành công'),
        [{text: 'Exit', onPress: () => navigation.goBack()}],
      );
    }
  };

  const onRefresh = () => {
    setRefresh(true);
    setLoading(true);
    loadData(() => {
      setRefresh(false);
      setLoading(false);
    });
  };

  const handleBack = () => navigation.goBack();

  const handlePressLesson = lesson => {
    console.log('lesson', lesson);
    setCurLesson(lesson);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <View
      style={StyleSheet.compose(
        styles.container,
        colors.background2,
      )}>
      <View>
        <Video
          lesson={curLesson}
          image={_.get(data, 'imageUrl', null)}
          handleBack={handleBack}
          url={_.get(curLesson, 'videoUrl', null)}
        />
      </View>
      <ScrollView
        style={styles.info}
        stickyHeaderIndices={[1]}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }>
        <View style={{marginHorizontal: 20}}>
          <Text
            style={StyleSheet.compose(
              styles.title,
              colors.text,
            )}>
            {data.title}
          </Text>
          <View style={styles.moreInfo}>
            <MoreInfo
              level={data.status}
              updated={data.updatedAt}
              duration={data.totalHours}
              rating={data.ratedNumber}
            />
          </View>
          <View style={styles.btnControl}>
            <ButtonControl />
          </View>
          <View style={styles.description}>
            <Description description={data.description} />
          </View>
          <View>
            <ButtonItem
              id={_.get(data, 'id', '')}
              ratings={_.get(data, 'ratings', [])}
              navigation={navigation}
            />
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
        <ListVideo
          isContent={isContent}
          lesson={curLesson}
          sections={_.get(data, 'section', [])}
          handlePressLesson={handlePressLesson}
        />
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
