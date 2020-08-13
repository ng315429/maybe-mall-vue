import { instanceAuth, instance } from '@/api/index';

const apiFileUpload = payload => {
  return instanceAuth({
    method: 'post',
    url: 'file/upload',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: payload,
  });
};

const apiFetchCategories = () => {
  return instance({
    method: 'get',
    url: 'categories',
  });
};

export { apiFileUpload, apiFetchCategories };
