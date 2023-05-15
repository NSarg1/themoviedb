import localStorage from "redux-persist/es/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";

import { genreReducer, movieReducer, searchReducer, favoritesReducer } from "./slices";

const rootReducer = combineReducers({
  movies: movieReducer,
  genres: genreReducer,
  search: searchReducer,
  favorites: persistReducer({ key: "favorites", storage: localStorage }, favoritesReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ serializableCheck: false })],
});

export const persistor = persistStore(store);

export { store };
