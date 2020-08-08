import { instanceAuth, instance } from './index';

const apiAddQuestion = payload => {
  return instanceAuth({
    method: 'post',
    url: 'questions',
    data: payload,
  });
};

const apiFetchQuestions = page => {
  return instance({
    method: 'get',
    url: `questions?page=${page}`,
  });
};
export { apiAddQuestion, apiFetchQuestions };
