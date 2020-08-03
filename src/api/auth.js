import { instance, instanceAuth } from './index';

const apiRegisterUser = payLoad => {
  return instance({
    method: 'post',
    url: 'auth/register',
    data: payLoad,
  });
};

const apiAccessToken = payLoad => {
  return instance({
    method: 'post',
    url: 'auth/access',
    data: payLoad,
  });
};

const apiRefreshToken = () => {
  return instanceAuth({
    method: 'get',
    url: 'auth/refresh',
  });
};

export { apiRegisterUser, apiAccessToken, apiRefreshToken };
