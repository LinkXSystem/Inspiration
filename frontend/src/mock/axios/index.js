import axios from 'axios';

/**
 *
 * @param {基本链接} url
 * @author linksystem
 * @description  封装用于访问的 url 基础
 */
const usual = url =>
  axios.create({
    baseURL: url,
    timeout: 4000,
  });

/**
 *
 * @param {指定授权链接} url
 * @param {授权配置} head
 * @param {获取Token} field
 * @author linksystem
 * @description  获取授权
 */
const grant = async (url, head, field) => {
  if (!url || !field) {
    return 'args is empty';
  }

  const headers = head || {};

  const res = await axios.head(url, {
    headers: headers,
  });

  return res.headers[field];
};

const build = async () => {
  const instance = usual('http://localhost:8080');

  await grant();

  const token = sessionStorage.getItem('x-auth-token');

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
