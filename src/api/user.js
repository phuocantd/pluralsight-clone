import axios from 'axios';

import {URL} from './index';

export const register = (username, email, phone, password) =>
  axios({
    method: 'POST',
    url: `${URL}/user/register`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {username, email, phone, password},
  });

export const sendActivateEmail = email =>
  axios({
    method: 'POST',
    url: `${URL}/user/send-activate-email`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {email},
  });

export const activateEmail = token =>
  axios({
    method: 'PUT',
    url: `${URL}/user/activate-email`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {token},
  });

export const login = (email, password) =>
  axios({
    method: 'POST',
    url: `${URL}/user/login`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {email, password},
  });

export const me = token =>
  axios({
    method: 'GET',
    url: `${URL}/user/me`,
    headers: {Authorization: `Bearer ${token}`},
  });

export const forgotPassword = email =>
  axios({
    method: 'POST',
    url: `${URL}/user/forget-pass/send-email`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {email},
  });

export const resetPassword = (id, password) =>
  axios({
    method: 'POST',
    url: `${URL}/user/reset-password`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {id, password},
  });

export const changePassword = (id, oldPass, newPass) =>
  axios({
    method: 'POST',
    url: `${URL}/user/change-password`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {id, oldPass, newPass},
  });

export const updateProfileAPI = (token, name, avatar, phone) =>
  axios({
    method: 'PUT',
    url: `${URL}/user/update-profile`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    data: {name, avatar, phone},
  });

export const getRecommend = userId =>
  axios({method: 'get', url: `${URL}/user/recommend-course/${userId}/10/1`});
