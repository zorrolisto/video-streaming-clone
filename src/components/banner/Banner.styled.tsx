import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const SSlide = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
`;
export const SImageBanner = styled(Image)`
  object-fit: cover;
`;
export const SImageBannerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
`;
export const SBanner = styled.div`
  margin: 0 2rem;
  .slick-dots {
    bottom: 0.25rem;
  }

  @media (max-width: 600px) {
    margin: 0;
  }
`;
export const SLink = styled(Link)`
  width: 92.5%;
  height: 15rem;

  @media (max-width: 600px) {
    height: 7.5rem;
  }
`;
