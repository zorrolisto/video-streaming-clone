"use client";

import styled from "styled-components";

export const SFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  color: white;
  font-size: 0.75rem;

  a {
    color: white;
    transition: 0.2s;

    &:hover {
      color: #d0d0d0;
    }
  }

  b {
    margin-left: 0.25rem;
  }

  @media (max-width: 600px) {
    font-size: 0.5rem;
    height: 2rem;
  }
`;
