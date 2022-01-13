const getGravatar = async (hashEmail) => {
  const request = await fetch(`https://www.gravatar.com/avatar/${hashEmail}`);
  return request;
};

export default getGravatar;
