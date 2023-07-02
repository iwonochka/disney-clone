import styled from "styled-components";

export const Spinner = styled.div`
  border: 16px solid #1B3157;
  border-top: 16px #3DA3E7 solid;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
