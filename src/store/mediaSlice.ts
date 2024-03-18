import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { IMovie, ISerie } from "@/src/shared/interfaces";

export interface IMoviesSliceState {
  movies: IMovie[];
  series: ISerie[];
  newMovies: IMovie[];
  favoriteMovies: IMovie[];
  favoriteSeries: ISerie[];
}
const initialState: IMoviesSliceState = {
  movies: [],
  newMovies: [],
  series: [],
  favoriteMovies: [],
  favoriteSeries: [],
};

export const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: (create) => ({
    setFavoriteMovies: create.reducer(
      (state, action: PayloadAction<IMovie[]>) => {
        state.favoriteMovies = action.payload;
      }
    ),
    setNewMovies: create.reducer((state, action: PayloadAction<IMovie[]>) => {
      state.newMovies = action.payload;
    }),
    setMovies: create.reducer((state, action: PayloadAction<IMovie[]>) => {
      state.movies = action.payload;
    }),
    setFavoriteSeries: create.reducer(
      (state, action: PayloadAction<ISerie[]>) => {
        state.favoriteSeries = action.payload;
      }
    ),
    setSeries: create.reducer((state, action: PayloadAction<ISerie[]>) => {
      state.series = action.payload;
    }),
    addFavoriteMovie: create.reducer((state, action: PayloadAction<IMovie>) => {
      state.favoriteMovies.push(action.payload);
    }),
    addFavoriteSerie: create.reducer((state, action: PayloadAction<ISerie>) => {
      state.favoriteSeries.push(action.payload);
    }),
    removeFavoriteMovie: create.reducer(
      (state, action: PayloadAction<number>) => {
        state.favoriteMovies = state.favoriteMovies.filter(
          (movie) => movie.id !== action.payload
        );
      }
    ),
    removeFavoriteSerie: create.reducer(
      (state, action: PayloadAction<number>) => {
        state.favoriteSeries = state.favoriteSeries.filter(
          (serie) => serie.id !== action.payload
        );
      }
    ),
  }),
  selectors: {
    selectMovies: (s) => s.movies,
    selectNewMovies: (s) => s.newMovies,
    selectFavoriteMovies: (s) => s.favoriteMovies,
    selectSeries: (s) => s.series,
    selectFavoriteSeries: (s) => s.favoriteSeries,
  },
});

export const {
  setMovies,
  setNewMovies,
  setFavoriteMovies,
  setSeries,
  setFavoriteSeries,
  addFavoriteMovie,
  addFavoriteSerie,
  removeFavoriteMovie,
  removeFavoriteSerie,
} = mediaSlice.actions;

export const {
  selectMovies,
  selectNewMovies,
  selectFavoriteMovies,
  selectSeries,
  selectFavoriteSeries,
} = mediaSlice.selectors;
