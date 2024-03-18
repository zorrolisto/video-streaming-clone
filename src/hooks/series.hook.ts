import { useEffect, useState } from "react";
import { ISerie, IResult } from "../shared/interfaces";
import { EFetchState as EFS } from "../shared/enums";
import {
  selectFavoriteSeries,
  selectSeries,
  setSeries,
  setFavoriteSeries,
  addFavoriteSerie,
  removeFavoriteSerie,
} from "../store/mediaSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchSeries } from "../apiCalls";
import {
  getArrayFromLocalStorage,
  setArrayToLocalStorage,
} from "../helpers/localStorage.helper";

export function useSeries() {
  const dispatch = useAppDispatch();
  const series = useAppSelector(selectSeries);
  const favoriteSeries = useAppSelector(selectFavoriteSeries);
  const [fetchState, setFetchState] = useState<EFS>(EFS.LOADING);

  useEffect(() => {
    getFavoriteSeries();
    void fetchNormalSeries();
  }, []);

  const getFavoriteSeries = () => {
    const favoriteSeries = getArrayFromLocalStorage("favoriteSeries");
    dispatch(setFavoriteSeries(favoriteSeries));
  };
  const fetchNormalSeries = async () => {
    const result: IResult<ISerie> = await fetchSeries();
    if (result.error) return setFetchState(EFS.ERROR);
    dispatch(setSeries(result.data || []));
    setFetchState(EFS.IDLE);
  };
  const addFavorite = (serie: ISerie) => {
    const serieWithLike = { ...serie, like: true };
    setArrayToLocalStorage("favoriteSeries", [
      ...favoriteSeries,
      serieWithLike,
    ]);
    dispatch(addFavoriteSerie(serieWithLike));
    const seriesWithLikes = series.map((s) => ({
      ...s,
      like: serie.id === s.id ? true : s.like,
    }));
    dispatch(setSeries(seriesWithLikes));
  };
  const removeFavorite = (id: number) => {
    dispatch(removeFavoriteSerie(id));
    const seriesWithLikes = series.map((s) => ({
      ...s,
      like: s.id === id ? false : s.like,
    }));
    setArrayToLocalStorage(
      "favoriteSeries",
      favoriteSeries.filter((s) => s.id !== id)
    );
    dispatch(setSeries(seriesWithLikes));
  };

  return {
    series,
    favoriteSeries,
    addFavorite,
    removeFavorite,
    fetchState,
  };
}
