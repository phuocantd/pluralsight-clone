import axios from 'axios';

import {URL} from './index';

export const getCategories = () =>
  axios({method: 'GET', url: `${URL}/category/all`});

export const getCategory = id =>
  axios({method: 'GET', url: `${URL}/category/${id}`});

export const getCategoryDetail = id =>
  axios({
    method: 'post',
    url: `${URL}/course/search`,
    data: {keyword: '', opt: {category: [id]}, limit: 10, offset: 1},
  });
