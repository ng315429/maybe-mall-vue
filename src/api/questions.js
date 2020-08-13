import { instanceAuth, instance } from './index';

const apiAddQuestion = payload => {
  return instanceAuth({
    method: 'post',
    url: 'questions',
    data: payload,
  });
};

const apiFetchQuestions = ({ page, category }) => {
  return instance({
    method: 'get',
    url: `questions?page=${page}&category=${category}`,
  });
};

const apiFetchAuthQuestions = page => {
  return instanceAuth({
    method: 'get',
    url: `questions/me?page=${page}`,
  });
};

const apiFetchAuthQuestionOne = id => {
  return instanceAuth({
    method: 'get',
    url: `questions/${id}`,
  });
};
export {
  apiAddQuestion,
  apiFetchQuestions,
  apiFetchAuthQuestionOne,
  apiFetchAuthQuestions,
};
