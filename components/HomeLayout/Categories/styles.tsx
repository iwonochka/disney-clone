import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0 26px;
  // each column stretch out as much as possible - 6 columns
  grid-template-columns: repeat(6, minmax(0, 1fr));
  //create a gap in between columns
  gap: 25px;
  border-radius: 10px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

