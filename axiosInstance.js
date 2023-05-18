import axios from 'axios';

let instance = null;

export const getAxiosInstance = (key) => {
  if (!instance) {
    instance = axios.create({
        headers: {
            Authorization: "Bearer " + key,
        },
    });
  }

  return instance;
};