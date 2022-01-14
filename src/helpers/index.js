export const setItemLocalStore = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const getItemLocalStore = (key) => JSON.parse(localStorage.getItem(key));
