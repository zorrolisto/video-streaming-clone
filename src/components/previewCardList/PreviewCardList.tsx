"use client";

import { EFetchState, EMediaType } from "@/src/shared/enums";
import { FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import { PreviewCard } from "../previewCard/PreviewCard";
import { TMediaType } from "@/src/shared/types";
import { AiOutlineLoading } from "react-icons/ai";
import { LOADING } from "@/src/shared/constants";
import {
  SLink,
  SLoading,
  SMessage,
  SPreviewCardList,
  STextContainer,
  STitle,
  STitleIcon,
} from "./PreviewCardList.styled";

interface IProps {
  state?: EFetchState;
  data: TMediaType[];
  title: string;
  link?: string;
  typeOfMedia: EMediaType;
  addFavorite?: (_: TMediaType) => any;
  removeFavorite?: (id: number) => void;
  mediaLikable?: boolean;
}

export const PreviewCardList = ({
  state,
  data,
  title,
  link = "#",
  typeOfMedia,
  addFavorite,
  removeFavorite,
  mediaLikable = true,
}: IProps) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <SPreviewCardList>
      <SLink href={link}>
        <STextContainer>
          <STitle>{title}</STitle>
          <STitleIcon>
            <FaChevronRight size={16} />
          </STitleIcon>
        </STextContainer>
      </SLink>
      {data.length > 0 && (
        <div className="slider-container">
          <Slider {...settings}>
            {data.map((s, idx) => (
              <PreviewCard
                key={idx}
                media={s}
                link={`/info/${typeOfMedia}/${s.id}`}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                likable={mediaLikable}
              />
            ))}
          </Slider>
        </div>
      )}
      {data.length === 0 && state !== LOADING && (
        <SMessage>Aún no tienes nada en esta sección.</SMessage>
      )}
      {state === LOADING && (
        <SLoading>
          <AiOutlineLoading size={16} />
        </SLoading>
      )}
    </SPreviewCardList>
  );
};
