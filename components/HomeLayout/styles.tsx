import styled from "styled-components";

export const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw - 5px);
  position: relative;
  overflow-x: hidden;
  &:before {
    background-image: url("/images/home-background.png");
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  h4 {
    font-size: 1.3rem;
    letter-spacing: 0.11px;
    line-height: 1.4;
  }
  `;
  
  export const Wrapper = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  background-color: rgba(249, 249, 249, 0.1);
  img {
    background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
  }
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px;
  }
  `;
