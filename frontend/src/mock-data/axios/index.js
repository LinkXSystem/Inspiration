import axios from 'axios';

const build = url =>
  axios.create({
    baseURL: url,
    // timeout: 2000,
  });

export default {
  build,
};
