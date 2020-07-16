import axios from 'axios';

import {URL} from './index';

export const getInstructors = () =>
  axios({method: 'GET', url: `${URL}/instructor`});

export const getInstructor = id =>
  axios({method: 'GET', url: `${URL}/instructor/detail/${id}`});
