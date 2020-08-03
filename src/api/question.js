import { instanceAuth } from './index';

const apiTest = () => {
  return instanceAuth({
    method: 'get',
    url: 'test',
  });
};

export { apiTest };
