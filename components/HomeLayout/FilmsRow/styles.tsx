import styled from "styled-components";
import Slider from "react-slick";

export const Container = styled.div<{ addMargin?: boolean }>`
  width: 100vw;
  margin-bottom: ${(props) => (props.addMargin ? "15px" : "0px")};
`;
