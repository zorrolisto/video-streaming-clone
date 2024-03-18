import styled from "styled-components";

export const SNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  @media (max-width: 600px) {
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem 1rem;
  }
`;
export const SProfilePhoto = styled.div`
  height: 2.3rem;
  width: 2.3rem;
  border: 0.15rem solid white;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  @media (max-width: 600px) {
    height: 1.4rem;
    width: 1.4rem;
  }
`;
export const SLinksContainer = styled.div`
  color: white;
  display: flex;
  gap: 2rem;

  @media (max-width: 600px) {
    gap: 1rem;
  }
`;
export const SLinkWrapper = styled.div<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 600px) {
    font-size: 0.5rem;
  }
`;
