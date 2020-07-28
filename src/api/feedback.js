import axios from 'axios';

import {URL} from './index';

export const sendFeedback = (token, subject, content) =>
  axios({
    method: 'post',
    url: `${URL}/feedback/create`,
    data: {subject, content},
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
