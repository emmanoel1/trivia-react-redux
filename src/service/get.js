/* const getQuestions = async (token) => {
  console.log('TESTE BUSCA PERGUNTA', token);
  return fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
}; */

const getQuestions = async (token) => {
  const request = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const result = await request.json();
  return result;
};

export default getQuestions;

const TOKEN_URL = 'https://opentdb.com/api_token.php?command=request';
const baseUrlQuestions = 'https://opentdb.com/api.php?amount=5&token=';
export const questionsAPI = (token) => fetch(`${baseUrlQuestions}${token}`).then((response) => response
  .json()
  .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))));
