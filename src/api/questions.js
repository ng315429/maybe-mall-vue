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

const apiFetchAuthQuestions = page => {
  return instanceAuth({
    method: 'get',
    url: `questions/me?page=${page}`,
  });
};

const apiFetchQuestionOne = id => {
  return instanceAuth({
    method: 'get',
    url: `questions/${id}`,
  });
};
export {
  apiAddQuestion,
  apiFetchQuestions,
  apiFetchQuestionOne,
  apiFetchAuthQuestions,
};
