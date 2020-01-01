/* eslint-disable no-return-await */
import axios from 'axios';

export const validateEmail = async email => {
  return await axios.get('/api/auth', { params: { email } }).then(res => res.data);
};

export const createUser = async({ nickname, email }) => {
  return await axios.post('/api/auth', { nickname, email });
};

// axios calendar helpers

export const createUserEvent = async(eventObj) => {
  await axios.post(`/calendar/${eventObj.userId}/events`, eventObj)
    .then(res => {
      debugger;
    })
    .catch(err => {
      console.error(err);
    });
};

export const getUserEvents = async userId => {
  await axios.get(`/calendar/${userId}/events`).then(res => res.data);
};

// export const editUserEvent = async({}) => {
//  await.axios.patch(endpoint, {})
// };

// axios journal helpers

// axios pillbox helpers
