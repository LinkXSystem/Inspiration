import Fingerprintjs2 from 'fingerprintjs2';

const build = () =>
  new Promise((resolve, reject) => {
    try {
      new Fingerprintjs2().get(result => {
        resolve(result);
      });
    } catch (error) {
      reject(error);
    }
  });

export default build;
