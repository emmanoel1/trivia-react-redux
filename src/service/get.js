const getQuestions = (token) => fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)
  .then((response) => response)
  .then((data) => data
    .json()
    .then((json) => (data.ok ? Promise.resolve(json) : Promise.reject(json))));

export default getQuestions;

// const getQuestions = async (token) => {
//   const request = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
//   const result = await request.json();
//   return result;
// };
