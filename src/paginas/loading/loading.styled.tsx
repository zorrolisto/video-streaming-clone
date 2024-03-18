import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styled from "styled-components";

export const SContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const SLoadingIcon = styled(AiOutlineLoading3Quarters)`
  color: #d0d0d0;
  height: 4rem;
  width: 4rem;
  margin-bottom: 10%;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 600px) {
    height: 2rem;
    width: 2rem;
  }
`;
