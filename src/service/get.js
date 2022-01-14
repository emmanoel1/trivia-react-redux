const getQuestions = async (token) => {
  const request = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const result = await request.json();
  return result;
};

export default getQuestions;
