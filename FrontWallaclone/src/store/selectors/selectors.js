export const getAdverts = (state) => state.adverts.data;
export const getAdvertDetail = (state, id) => getAdverts(state).find((advert) => advert._id === id);
export const areAdvertsLoaded = (state) => state.adverts.loaded;

export const getUserAuth = (state) => state.auth;
export const getUserData = (state) => state.userData;
export const getPublicUser = (state) => state.publicUser;

export const getCategories = (state) => state.categories;
export const getCagetoriesIsLoaded = (state) => getCategories(state).length > 0;
export const getCategoryDetail = (state, id) =>
  getCategories(state).find((category) => category._id === id);

export const getTagsIsLoaded = (state) => getTags(state).length !== 0;
export const getTags = (state) => state.tags;

export const getIsLogged = (state) => state.auth;

export const getUi = (state) => state.ui;
