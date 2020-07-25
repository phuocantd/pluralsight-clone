import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import _ from 'lodash';

// import {listPathConferences, listTopAuthor} from 'data/browse';
// import {IToperations, softwareDevelopment} from 'data/home';
// import {LISTCOURSE, AUTHORDETAIL, PATHDETAIL} from 'global/constants';
import {globalStyles} from 'global/styles';
import {ThemeContext} from 'tools/context/theme';
import Loading from 'src/components/Loading';
import {getCategoryDetail} from 'api/category';
import ListCourse from 'components/lists/courses';
import {COURSEDETAIL} from 'src/global/constants';
// import PathHorizontal from 'components/scrollHorizontal/paths';
// import CourseHorizontal from 'components/scrollHorizontal/courses';
// import AuthorScroll from 'components/scrollHorizontal/authors';

export default function Skill({navigation, route}) {
  const {colors} = React.useContext(ThemeContext);

  const {id} = route.params;
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    _loadData();
  }, []);

  const _loadData = async () => {
    try {
      const res = await getCategoryDetail(id);
      console.log('category:', _.get(res, 'data.payload.rows', []) || []);
      setData(_.get(res, 'data.payload.rows', []) || []);
      setLoading(false);
    } catch (error) {}
  };

  const handleDetailCourse = idCourse =>
    navigation.navigate(COURSEDETAIL, {id: idCourse});

  // const handleSeeAll = (title, items) =>
  //   navigation.navigate(LISTCOURSE, {items, title});

  // const handleDetailCourse = screen => navigation.navigate(screen);

  // const handleDetailAuthor = () => navigation.navigate(AUTHORDETAIL);

  // const handleDetailPath = () =>
  //   navigation.navigate(PATHDETAIL, {title: 'Angular denver 2019'});

  if (loading) {
    return <Loading />;
  }

  if (_.isEmpty(data)) {
    return (
      <View
        style={[globalStyles.container, colors.container, styles.container]}>
        <Text style={[colors.text, styles.text]}>No course</Text>
      </View>
    );
  }

  return <ListCourse items={data} handleDetail={handleDetailCourse} />;
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 30},
});
