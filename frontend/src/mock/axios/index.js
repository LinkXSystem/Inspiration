import axios from 'axios';
import { fingerprint } from '../../utils';

const usual = url =>
  axios.create({
    baseURL: url,
    timeout: 4000,
  });

const build = async () => {
  const canvas = await fingerprint();

  const instance = axios.create({
    baseURL: 'http://localhost:4200',
    timeout: 4000,
  });

  const res = await instance.head('/auth/', {
    headers: {
      access: 'linksystem-inspiration',
      canvas: canvas,
    },
  });

  const token = res.headers['x-auth-token'];

  instance.interceptors.request.use(
    config =>
      Object.assign(config, {
        headers: {
          'X-Auth-Token': token,
        },
      }),
    error => Promise.reject(error),
  );

  instance.interceptors.response.use(
    response => response,
    error => Promise.reject(error),
  );

  return instance;
};

export default {
  usual,
  build,
};
