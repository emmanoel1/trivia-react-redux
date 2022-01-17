const TOKEN_ENDPOINT = 'https://opentdb.com/api_token.php?command=request';

const getToken = () => (
  fetch(TOKEN_ENDPOINT)
    .then((response) => response)
    .then((data) => data.json()
      .then((json) => (data.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export default getToken;
// export const getTokenAPI = () => (
//   fetch(TOKEN_URL)
//   .then((res) => res.json()
//   .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
//   );

//   export const questionsAPI = (token) => (
//   fetch(`${baseUrlQuestions}${token}`)
//   .then((response) => (
//   response.json()
//   .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
//   ))
//   );
// const TOKEN_ENDPOINT = 'https://opentdb.com/api_token.php?command=request';

// const getToken = async () => {
//   const request = await fetch(TOKEN_ENDPOINT);

//   const result = await request.json();
//   return result;
// };

// export default getToken;
