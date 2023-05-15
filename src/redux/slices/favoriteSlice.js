import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState,
  reducers: {
    addToFavorite: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFromFavorites: (state, { payload }) => {
      const idx = state.favorites.findIndex((favorite) => favorite.id === payload.id);
      state.favorites.splice(idx, 1);
    },
  },
});

export const { addToFavorite, removeFromFavorites } = favoriteSlice.actions;

const favoritesReducer = favoriteSlice.reducer;

export { favoritesReducer };
