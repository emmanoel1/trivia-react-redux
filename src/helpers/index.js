export const setItemLocalStore = (k, v) => localStorage.setItem(k, JSON.stringify(v));
export const getItemLocalStore = (key) => JSON.parse(localStorage.getItem(key));

export const orderScore = (array) => {
  const NEGATIVE_ONE = -1;
  return array.sort((a, b) => {
    if (a.score < b.score) return 1;
    if (a.score > b.score) return NEGATIVE_ONE;
    return 0;
  });
};

export const createRanking = (userName, userPicture, userScore) => {
  const player = {
    name: userName,
    score: userScore,
    picture: userPicture,
  };

  const PlayersStorage = getItemLocalStore('ranking');
  if (PlayersStorage === null) {
    const allPlayers = player;
    setItemLocalStore('ranking', [allPlayers]);
    return allPlayers;
  }
  const allPlayers = [player, ...PlayersStorage];
  setItemLocalStore('ranking', orderScore(allPlayers));
};
