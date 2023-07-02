import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow-x: hidden;
  display: block;
  top: 0px;
  padding: 0 calc(3.5vw + 5px);
  color: ${(props) => props.theme.white};
  opacity: 0.8;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
