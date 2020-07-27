/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useContext} from 'react';
import {Image, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';
import _ from 'lodash';

import {LISTCOURSE} from 'global/constants';
import CourseScroll from 'components/scrollHorizontal/courses';
import {getRecommend} from 'api/user';
import Loading from 'src/components/Loading';
import {Stores} from 'src/tools/context/stores';

export default function AuthHome({navigation}) {
  const {profile} = useContext(Stores);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const arrReq = [getRecommend(profile.id)];
    axios
      .all(arrReq)
      .then(([resRecommend]) => {
        console.log('recommend', recommend);
        const recommend = _.get(resRecommend, 'data.payload', []);
        setData({recommend});
        setLoading(false);
      })
      .catch(err => console.log('ERR:', err));
  };

  const handleSeeAll = (title, items) =>
    navigation.navigate(LISTCOURSE, {items, title});

  const handleDetailCourse = (screen, id) => navigation.navigate(screen, {id});

  if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://financesonline.com/uploads/2019/08/Pluralsight-logo1.png',
        }}
      />
      <CourseScroll
        title="Đề xuất cho bạn"
        items={_.get(data, 'recommend', [])}
        handleSeeAll={handleSeeAll}
        handleDetail={handleDetailCourse}
      />
      {/*
      <CourseScroll
        title="Khóa học mới"
        items={_.get(data, 'topNew', [])}
        handleSeeAll={handleSeeAll}
        handleDetail={handleDetailCourse}
      />
      <CourseScroll
        title="Khóa học đánh giá cao"
        items={_.get(data, 'topRate', [])}
        handleSeeAll={handleSeeAll}
        handleDetail={handleDetailCourse}
      /> */}
      {/* <CourseScroll
        title={securityProfessional.title}
        items={securityProfessional.listCourse}
        handleSeeAll={handleSeeAll}
        handleDetail={handleDetailCourse}
      /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {height: 100},
});
