import axios from 'axios';
import { fingerprint } from '../../utils';

/**
 *
 * @param {基本链接} url
 * @author linksystem
 * @description  封装用于访问的 url 基础
 */
const usual = url =>
  axios.create({
    baseURL: url,
    // timeout: 4000,
  });

const grant = async () => {
  const instance = usual('http://localhost:8080');

  const canvas = await fingerprint();

  const res = await instance.head('/auth/', {
    headers: {
      access: 'linksystem-inspiration',
      canvas: canvas,
    },
  });

  return res.headers['x-auth-token'];
};

const build = async () => {
  const instance = usual('http://localhost:8080');

  const token = await grant();

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
  grant,
  build,
};
