"use client";

import Link from "next/link";
import { FaHeart, FaRegHeart, FaPlay, FaInfo } from "react-icons/fa";
import {
  SButton,
  SButtonsContainer,
  SImageBanner,
  SImageBannerContainer,
  SInformationPreview,
  SPreviewCardContainer,
  SSlide,
  STitleInfo,
} from "./PreviewCard.styled";

export const PreviewCard = (props: any) => {
  const {
    index,
    likable,
    media,
    link,
    addFavorite,
    removeFavorite,
    ...otherProps
  } = props;
  return (
    <SPreviewCardContainer>
      <SSlide {...otherProps}>
        <SImageBannerContainer>
          <SImageBanner
            alt="banner-image"
            src={media.img}
            sizes="(max-width: 600px) 100vw, 600px"
            fill={true}
          />
        </SImageBannerContainer>
        <SInformationPreview>
          <SButtonsContainer>
            <Link href={link}>
              <SButton>
                <FaPlay size={16} color="white" />
              </SButton>
            </Link>
            {likable && (
              <SButton
                onClick={() =>
                  media.like ? removeFavorite(media.id) : addFavorite(media)
                }
              >
                {media.like ? (
                  <FaHeart size={16} color="red" />
                ) : (
                  <FaRegHeart size={16} color="red" />
                )}
              </SButton>
            )}
            <Link href={link}>
              <SButton>
                <FaInfo size={16} color="white" />
              </SButton>
            </Link>
          </SButtonsContainer>
          <STitleInfo>{media.title}</STitleInfo>
        </SInformationPreview>
      </SSlide>
    </SPreviewCardContainer>
  );
};
