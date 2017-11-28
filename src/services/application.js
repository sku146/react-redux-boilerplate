// @flow
import request from 'superagent';
import {
  EXAMPLE_LIST,
} from 'constants/api-endpoints';

type Response = {
  text?: string,
  status?: number,
};

type Error = {};

export const fetchExampleList = (): Promise<Response> =>
  new Promise((resolve, reject) => {
    request
      .get(EXAMPLE_LIST)
      .end((err: Error, res: Response) => {
        try {
          const resObj = res.text ? JSON.parse(res.text) : {};

          if (err) {
            reject({ error: true, data: resObj, status: res.status });
            return;
          }

          resolve(resObj);
        } catch (unknownError) {
          reject({
            error: true,
            data: { message: 'Unknown error' },
            status: res ? res.status : 500,
          });
        }
      });
  });

export default {
  fetchExampleList,
};
