import React from 'react';
import ListCourse from 'components/lists/courses';
import {COURSEDETAIL} from 'src/global/constants';

export default function ResultSearch({list, navigation}) {
  const handleDetailCourse = id => navigation.navigate(COURSEDETAIL, {id});

  return <ListCourse items={list} handleDetail={handleDetailCourse} />;
}
