import Image from "next/image";
import styled from "styled-components";

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  color: white;

  @media (max-width: 600px) {
    gap: 0.5rem;
    padding: 1rem;
  }
`;
export const SImageContainer = styled.div`
  min-width: 20rem;
  height: 15rem;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;

  @media (max-width: 600px) {
    min-width: 0rem;
    height: 9rem;
    width: calc(100vw - 2rem);
  }
`;
export const SMediaInfo = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;
export const STitle = styled.h2`
  font-size: 2rem;
  //remove the extra space of the h2
  margin: 0.75rem 0;

  color: white;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
export const SDescription = styled.p`
  color: #d0d0d0;

  @media (max-width: 600px) {
    font-size: 0.5rem;
  }
`;
export const SMediaInfoTexts = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;

  @media (max-width: 600px) {
    margin-right: 0rem;
  }
`;
export const SImage = styled(Image)`
  object-fit: cover;
  min-width: 100%;
`;
