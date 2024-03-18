import Image from "next/image";
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
  width: 92.5%;
  height: 7.5rem;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 97.5%;
    height: 5rem;
  }
`;
export const SInformationPreview = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  width: 92.5%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  transition: opacity 0.2s;
  margin: auto;
  border-radius: 0.5rem;

  @media (max-width: 600px) {
    width: 97.5%;
  }
`;
export const SPreviewCardContainer = styled.div`
  position: relative;

  &:hover ${SInformationPreview} {
    display: flex;
  }
`;
export const SButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  border: 3px solid gray;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    border: 3px solid white;
  }

  @media (max-width: 600px) {
    border: 1px solid gray;
    width: 1.5rem;
    height: 1.5rem;

    &:hover {
      border: 1px solid white;
    }
  }
`;
export const SButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 600px) {
    gap: 0.2rem;
  }
`;
export const STitleInfo = styled.strong`
  font-size: 0.75rem;
  text-align: center;
  margin: 0 0.15rem;

  @media (max-width: 600px) {
    font-size: 0.5rem;
  }
`;
