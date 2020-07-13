import { LIST_GET, DETAIL_HOME_GET, LIST_ABILITY_GET } from './types';
import axios from 'axios';
import { API_LINK } from './api';


export const listGet = data => dispatch => {
  let listUrl;
  if(data.ability) {
    listUrl = data.ability;
  } else {
    listUrl = `${API_LINK}pokemon/?offset=${data.offset}&limit=12`;
  }
  
  axios.get(listUrl)
  .then(function (response) {
    dispatch({
      type: LIST_GET,
      payload: response.data
    })
  })
  .catch(function (error) {
    console.log('LIST_GET', error, error.response)
  });
};

export const listAbilityGet = data => dispatch => {
  const listAbilityUrl = `${API_LINK}ability/?offset=0&limit=999`;
  axios.get(listAbilityUrl)
  .then(function (response) {
    dispatch({
      type: LIST_ABILITY_GET,
      payload: response.data
    })
  })
  .catch(function (error) {
    console.log('LIST_ABILITY_GET', error, error.response)
  });
};

export const detailHomeGet = detailHomeUrl => dispatch => {
  axios.get(detailHomeUrl)
  .then(function (response) {
    dispatch({
      type: DETAIL_HOME_GET,
      payload: response.data
    })
  })
  .catch(function (error) {
    console.log('DETAIL_HOME_GET', error, error.response)
  });
};
