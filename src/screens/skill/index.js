import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import {listPathConferences, listTopAuthor} from 'data/browse';
import {IToperations, softwareDevelopment} from 'data/home';
import {LISTCOURSE, AUTHORDETAIL, PATHDETAIL} from 'global/constants';
import {globalStyles} from 'global/styles';
import {ThemeContext} from 'tools/context/theme';
import PathHorizontal from 'components/scrollHorizontal/paths';
import CourseHorizontal from 'components/scrollHorizontal/courses';
import AuthorScroll from 'components/scrollHorizontal/authors';

export default function Skill({navigation}) {
  const {colors} = React.useContext(ThemeContext);
  const handleSeeAll = (title, items) =>
    navigation.navigate(LISTCOURSE, {items, title});

  const handleDetailCourse = screen => navigation.navigate(screen);

  const handleDetailAuthor = () => navigation.navigate(AUTHORDETAIL);

  const handleDetailPath = () =>
    navigation.navigate(PATHDETAIL, {title: 'Angular denver 2019'});

  return (
    <ScrollView
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      <PathHorizontal
        title="Paths in Angular"
        items={listPathConferences.list}
        handleDetail={handleDetailPath}
      />
      <CourseHorizontal
        title="New Angular"
        items={IToperations.listCourse}
        handleSeeAll={handleSeeAll}
        handleDetail={handleDetailCourse}
      />
      <CourseHorizontal
        title="Trending in Angular"
        items={softwareDevelopment.listCourse}
        handleSeeAll={handleSeeAll}
        handleDetail={handleDetailCourse}
      />
      <AuthorScroll
        handleDetail={handleDetailAuthor}
        title="Top authors in Software Development"
        items={listTopAuthor.list}
      />
    </ScrollView>
  );
}
