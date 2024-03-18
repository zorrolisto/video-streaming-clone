"use client";

import styled from "styled-components";
import Link from "next/link";

export const SPreviewCardList = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;
export const STextContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 1rem;
  color: #d0d0d0;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: white;
  }

  @media (max-width: 600px) {
    margin-bottom: 0.5rem;
  }
`;
export const STitle = styled.strong`
  font-size: 1rem;

  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;
export const STitleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;

  @media (max-width: 600px) {
    width: 0.5rem;
    height: 0.5rem;
  }
`;
export const SLink = styled(Link)`
  display: flex;
  width: fit-content;
`;
export const SMessage = styled.strong`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  color: #d0d0d0;
  text-align: center;
  font-size: 0.75rem;

  @media (max-width: 600px) {
    height: 3rem;
    font-size: 0.5rem;
  }
`;
export const SLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  color: #d0d0d0;
  text-align: center;
  font-size: 0.75rem;
  transition: 0.2s;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
