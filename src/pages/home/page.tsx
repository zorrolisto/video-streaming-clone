"use client";

import { Banner } from "@/src/components/banner/Banner";
import { PreviewCardList } from "@/src/components/previewCardList/PreviewCardList";
import { useMovies } from "@/src/hooks/movies.hook";
import { useSeries } from "@/src/hooks/series.hook";
import { EMediaType } from "@/src/shared/enums";
import { ContainerPreviews } from "@/src/styles/shared.styled";

export default function HomePage() {
  const {
    movies,
    newMovies,
    favoriteMovies,
    fetchState: moviesFetchState,
    addFavorite: addFavoriteMovie,
    removeFavorite: removeFavoriteMovie,
  } = useMovies();
  const {
    series,
    favoriteSeries,
    fetchState: seriesFetchState,
    addFavorite: addFavoriteSerie,
    removeFavorite: removeFavoriteSerie,
  } = useSeries();

  return (
    <>
      <Banner data={newMovies} />
      <ContainerPreviews>
        <PreviewCardList
          title="Tus Peliculas Favoritas"
          link="/peliculas"
          data={favoriteMovies}
          typeOfMedia={EMediaType.MOVIE}
          removeFavorite={removeFavoriteMovie}
        />
        <PreviewCardList
          title="Peliculas Originales"
          link="/peliculas"
          data={movies}
          state={moviesFetchState.normalMovies}
          typeOfMedia={EMediaType.MOVIE}
          addFavorite={addFavoriteMovie}
          removeFavorite={removeFavoriteMovie}
        />
        <PreviewCardList
          title="Tus Series Favoritas"
          link="/series"
          data={favoriteSeries}
          typeOfMedia={EMediaType.SERIE}
          addFavorite={addFavoriteSerie}
          removeFavorite={removeFavoriteSerie}
        />
        <PreviewCardList
          title="Series Originales"
          link="/series"
          data={series}
          state={seriesFetchState}
          typeOfMedia={EMediaType.SERIE}
          addFavorite={addFavoriteSerie}
          removeFavorite={removeFavoriteSerie}
        />
      </ContainerPreviews>
    </>
  );
}
