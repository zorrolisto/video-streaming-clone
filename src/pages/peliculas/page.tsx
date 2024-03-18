"use client";

import { PreviewCardList } from "@/src/components/previewCardList/PreviewCardList";
import { useMovies } from "@/src/hooks/movies.hook";
import { EMediaType } from "@/src/shared/enums";
import { ContainerPreviews } from "@/src/styles/shared.styled";

export default function PeliculasPage() {
  const {
    movies,
    favoriteMovies,
    fetchState: moviesFetchState,
    addFavorite: addFavoriteMovie,
    removeFavorite: removeFavoriteMovie,
  } = useMovies();

  return (
    <ContainerPreviews>
      <PreviewCardList
        link="/peliculas"
        data={favoriteMovies}
        title="Tus Peliculas Favoritas"
        typeOfMedia={EMediaType.MOVIE}
        removeFavorite={removeFavoriteMovie}
      />
      <PreviewCardList
        link="/peliculas"
        data={movies}
        state={moviesFetchState.normalMovies}
        title="Peliculas Originales"
        typeOfMedia={EMediaType.MOVIE}
        addFavorite={addFavoriteMovie}
        removeFavorite={removeFavoriteMovie}
      />
    </ContainerPreviews>
  );
}
