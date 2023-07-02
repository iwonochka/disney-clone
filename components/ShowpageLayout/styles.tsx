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

export const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;

export const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

export const AddButton = styled.button`
  border-radius: 50%;
  height: 44px;
  margin-right: 16px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid white;
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;

export const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

export const Details = styled.div`
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

export const Description = styled.div`
  font-size: 20px;
  min-height: 20px;
  margin-top: 16px;
  line-height: 1.4;
  max-width: 760px;
`;

export const PlayerWrapper = styled.div`
  margin: 2rem 0;
  position: relative;
  padding-top: 56.25%;
`;

export const Player = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
