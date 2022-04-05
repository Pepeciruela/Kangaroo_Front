const storage = {
  get(key) {
    let value = localStorage.getItem(key);
    if (!value) {
      value = sessionStorage.getItem(key);
    } else if (!value) {
      return null;
    }
    return JSON.parse(value);
  },

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  session(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  },

  remove(key) {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  },
};

export default storage;
