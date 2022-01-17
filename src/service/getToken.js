const TOKEN_ENDPOINT = 'https://opentdb.com/api_token.php?command=request';

const getToken = async () => {
  const request = await fetch(TOKEN_ENDPOINT);

  const result = await request.json();
  return result;
};

export default getToken;
