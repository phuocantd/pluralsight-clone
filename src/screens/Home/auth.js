import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';
import _ from 'lodash';

import {LISTCOURSE} from 'global/constants';
import CourseScroll from 'components/scrollHorizontal/courses';
import {getTopSell, getTopNew, getTopRate} from 'api/course';
import Loading from 'components/loading';

export default function AuthHome({navigation}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const arrReq = [getTopSell(10, 1), getTopNew(10, 1), getTopRate(10, 1)];
    axios
      .all(arrReq)
      .then(([resTopSell, resTopnew, resTopRate]) => {
        const topSell = _.get(resTopSell, 'data.payload', []);
        const topNew = _.get(resTopnew, 'data.payload', []);
        const topRate = _.get(resTopRate, 'data.payload', []);
        setData({topSell, topNew, topRate});
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
        title="Khóa học bán chạy"
        items={_.get(data, 'topSell', [])}
        handleSeeAll={handleSeeAll}
        handleDetail={handleDetailCourse}
      />
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
      />
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
