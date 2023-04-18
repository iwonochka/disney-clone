import styled from "styled-components";
import Slider from "react-slick";

export const Container = styled.div<{ addMargin?: boolean }>`
  width: 100vw;
  margin-bottom: ${(props) => (props.addMargin ? "15px" : "0px")};
`;

export const Content = styled(Slider)`
  gap: 25px;
  width: 89%;
  margin-top: 30px;
  display: flex;
  align-items: center;
`;
