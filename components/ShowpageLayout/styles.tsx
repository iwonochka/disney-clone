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

export const ImageTitle = styled.div`
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0 auto;
  height: 24vw;
  min-height: 142px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;
