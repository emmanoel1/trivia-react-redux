const getQuestions = async (token) => {
  console.log('api TRIVIA');
  const request = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const result = await request.json();
  console.log(result);
  return result;
};

export default getQuestions;
