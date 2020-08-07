import { instanceAuth } from './index';

const apiAddQuestion = payload => {
  return instanceAuth({
    method: 'post',
    url: 'question',
    data: payload,
  });
};

export { apiAddQuestion };
