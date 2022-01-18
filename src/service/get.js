/* const getQuestions = async (token) => {
  console.log('TESTE BUSCA PERGUNTA', token);
  return fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
}; */

const getQuestions = (token) => (
  fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)
    .then((response) => response)
    .then((data) => data.json()
      .then((json) => (data.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export default getQuestions;

// const getQuestions = async (token) => {
//   const request = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
//   const result = await request.json();
//   return result;
// };
