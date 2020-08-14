import axios from 'axios';

import {URL} from './index';

export const getTotalNumber = () =>
  axios({method: 'get', url: `${URL}/course/total-number`});

export const getTopSell = (limit, page) =>
  axios({method: 'post', url: `${URL}/course/top-sell`, data: {limit, page}});

export const getTopNew = (limit, page) =>
  axios({method: 'post', url: `${URL}/course/top-new`, data: {limit, page}});

export const getTopRate = (limit, page) =>
  axios({method: 'post', url: `${URL}/course/top-rate`, data: {limit, page}});

export const getUserFavourite = userId =>
  axios({
    method: 'post',
    url: `${URL}/course/courses-user-favorite-categories`,
    data: {userId},
  });

export const getCourseInfo = id =>
  axios({method: 'get', url: `${URL}/course/get-course-info?id=${id}`});

export const getCourseDetail = (id, userId) =>
  axios({
    method: 'get',
    url: `${URL}/course/get-course-detail/${id}/${userId}`,
  });

export const search = keyword =>
  axios({
    method: 'post',
    url: `${URL}/course/search`,
    data: {keyword},
  });

export const search2 = (keyword, limit, offset) =>
  axios({
    method: 'post',
    url: `${URL}/course/searchV2`,
    data: {keyword, limit, offset},
  });

export const ratingCourse = (
  token,
  courseId,
  formalityPoint,
  contentPoint,
  presentationPoint,
  content,
) =>
  axios({
    method: 'post',
    url: `${URL}/course/rating-course`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    data: {courseId, formalityPoint, contentPoint, presentationPoint, content},
  });
