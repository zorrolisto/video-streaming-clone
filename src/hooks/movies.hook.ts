import { useEffect, useState } from "react";
import type { IMovie, IResult } from "../shared/interfaces";
import { EFetchState as EFS } from "../shared/enums";
import {
  selectFavoriteMovies,
  selectMovies,
  setMovies,
  setFavoriteMovies,
  addFavoriteMovie,
  removeFavoriteMovie,
  setNewMovies,
  selectNewMovies,
} from "../store/mediaSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchMovies, fetchNewMovies } from "../apiCalls";
import {
  getArrayFromLocalStorage,
  setArrayToLocalStorage,
} from "../helpers/localStorage.helper";

interface IMoviesFetchState {
  normalMovies: EFS;
  newMovies: EFS;
}
const initialState: IMoviesFetchState = {
  normalMovies: EFS.LOADING,
  newMovies: EFS.LOADING,
};

export function useMovies() {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectMovies);
  const favoriteMovies = useAppSelector(selectFavoriteMovies);
  const newMovies = useAppSelector(selectNewMovies);
  const [fetchState, setFetchState] = useState<IMoviesFetchState>(initialState);

  useEffect(() => {
    const favMovies = getFavoriteMovies();
    void fetchNormalMovies(favMovies);
    void fetchFiveNewMovies();
  }, []);

  const getFavoriteMovies = () => {
    const favoriteMovies = getArrayFromLocalStorage("favoriteMovies");
    dispatch(setFavoriteMovies(favoriteMovies));
    return favoriteMovies;
  };
  const fetchNormalMovies = async (favMovies: IMovie[]) => {
    const result: IResult<IMovie> = await fetchMovies();
    if (result.error)
      return setFetchState((s) => ({ ...s, normalMovies: EFS.ERROR }));
    const moviesWithLikes = result.data?.map((m) => ({
      ...m,
      like: favMovies.some((f) => f.id === m.id),
    }));
    dispatch(setMovies(moviesWithLikes || []));
    setFetchState((s) => ({ ...s, normalMovies: EFS.ERROR }));
  };
  const fetchFiveNewMovies = async () => {
    const result: IResult<IMovie> = await fetchNewMovies();
    if (result.error)
      return setFetchState((s) => ({ ...s, newMovies: EFS.ERROR }));
    dispatch(setNewMovies(result.data || []));
    setFetchState((s) => ({ ...s, newMovies: EFS.IDLE }));
  };
  const addFavorite = (movie: IMovie) => {
    const movieWithLike = { ...movie, like: true };
    setArrayToLocalStorage("favoriteMovies", [
      ...favoriteMovies,
      movieWithLike,
    ]);
    dispatch(addFavoriteMovie(movieWithLike));
    const moviesWithLikes = movies.map((m) => ({
      ...m,
      like: movie.id === m.id ? true : m.like,
    }));
    dispatch(setMovies(moviesWithLikes));
  };
  const removeFavorite = (id: number) => {
    dispatch(removeFavoriteMovie(id));
    const moviesWithLikes = movies.map((m) => ({
      ...m,
      like: m.id === id ? false : m.like,
    }));
    setArrayToLocalStorage(
      "favoriteMovies",
      favoriteMovies.filter((m) => m.id !== id)
    );
    dispatch(setMovies(moviesWithLikes));
  };

  return {
    movies,
    newMovies,
    favoriteMovies,
    addFavorite,
    removeFavorite,
    fetchState,
  };
}
