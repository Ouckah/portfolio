import axios from 'axios';

let instance = null;

export const getAxiosInstance = (key) => {

  instance = axios.create({
    headers: {
      Authorization: `Bearer ${key}`,
    },
  })

  return instance;
};

export const deleteAxiosInstance = () => {
  instance = null;
}