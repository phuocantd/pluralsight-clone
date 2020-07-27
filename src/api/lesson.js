import axios from 'axios';

import {URL} from './index';

export const getSubtitle = (token, courseId, lessonId) =>
  axios({
    method: 'get',
    url: `${URL}/lesson/subtitle/${courseId}/${lessonId}`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
