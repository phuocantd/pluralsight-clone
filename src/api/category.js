import axios from 'axios';

import {URL} from './index';

export const getCategories = () =>
  axios({method: 'GET', url: `${URL}/category/all`});

export const getCategory = id =>
  axios({method: 'GET', url: `${URL}/category/${id}`});
