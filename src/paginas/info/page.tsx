"use client";

import { PreviewCardList } from "@/src/components/previewCardList/PreviewCardList";
import { EMediaType } from "@/src/shared/enums";
import {
  SContainer,
  SDescription,
  SImage,
  SImageContainer,
  SMediaInfo,
  SMediaInfoTexts,
  STitle,
} from "./info.styled";
import { fetchMediaAndRecommendations } from "@/src/ApiCalls";

export default async function InfoPage({
  params,
}: {
  params: { info: string[] };
}) {
  const [type, id] = params.info;
  const { data: media, recomendations } = await fetchMediaAndRecommendations(
    id,
    type as unknown as EMediaType
  );
  return (
    <SContainer>
      <SMediaInfo>
        <SImageContainer>
          <SImage src={media.img} alt={media.title} fill={true} />
        </SImageContainer>
        <SMediaInfoTexts>
          <STitle>{media.title}</STitle>
          <SDescription>{media.description}</SDescription>
        </SMediaInfoTexts>
      </SMediaInfo>
      <PreviewCardList
        title="Recomendaciones"
        data={recomendations}
        typeOfMedia={type as unknown as EMediaType}
        mediaLikable={false}
      />
    </SContainer>
  );
}
