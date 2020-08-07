import { instanceAuth } from '@/api/index';

const apiFileUpload = payload => {
  console.log(payload);
  return instanceAuth({
    method: 'post',
    url: 'file/upload',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: payload,
  });
};

export { apiFileUpload };
