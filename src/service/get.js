/* const getQuestions = async (token) => {
  console.log('TESTE BUSCA PERGUNTA', token);
  return fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
}; */

const getQuestions = async (token) => {
  console.log('TESTE BUSCA PERGUNTA', token);
  const request = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const result = await request.json();
  return result;
};

export default getQuestions;
