"use client";

import { PreviewCardList } from "@/src/components/previewCardList/PreviewCardList";
import { useSeries } from "@/src/hooks/series.hook";
import { EMediaType } from "@/src/shared/enums";
import { ContainerPreviews } from "@/src/styles/shared.styled";

export default function SeriesPage() {
  const {
    series,
    favoriteSeries,
    fetchState: seriesFetchState,
    addFavorite: addFavoriteSerie,
    removeFavorite: removeFavoriteSerie,
  } = useSeries();

  return (
    <ContainerPreviews>
      <PreviewCardList
        link="/series"
        data={favoriteSeries}
        title="Tus Series Favoritas"
        typeOfMedia={EMediaType.SERIE}
        addFavorite={addFavoriteSerie}
        removeFavorite={removeFavoriteSerie}
      />
      <PreviewCardList
        link="/series"
        data={series}
        state={seriesFetchState}
        title="Series Originales"
        typeOfMedia={EMediaType.SERIE}
        addFavorite={addFavoriteSerie}
        removeFavorite={removeFavoriteSerie}
      />
    </ContainerPreviews>
  );
}
