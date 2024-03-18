"use client";

import Slider from "react-slick";
import {
  SSlide,
  SImageBanner,
  SImageBannerContainer,
  SBanner,
  SLink,
} from "./Banner.styled";
import { IMovie } from "@/src/shared/interfaces";

interface IPropsBanner {
  data: IMovie[];
}

export const Banner = ({ data }: IPropsBanner) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    responsive: [{ breakpoint: 600, settings: { dots: false } }],
  };

  return (
    <SBanner className="slider-container">
      <Slider {...settings}>
        {data.map((s, idx) => (
          <CustomSlide
            key={idx}
            index={idx}
            media={s}
            link={`/info/movie/${s.id}`}
          />
        ))}
      </Slider>
    </SBanner>
  );
};

const CustomSlide = (props: any) => {
  const { index, media, link, ...otherProps } = props;
  return (
    <SSlide {...otherProps}>
      <SLink href={link}>
        <SImageBannerContainer>
          <SImageBanner alt="banner-image" src={media.banner} fill={true} />
        </SImageBannerContainer>
      </SLink>
    </SSlide>
  );
};
