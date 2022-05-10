import { VFC } from 'react';
import styled from 'styled-components';
import backgroundPc from '../pages/images/bg.jpg';

export const Home: VFC = () => {
  return (
    <SContainer>
      <SP>My Portfolio</SP>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  height: 80vh;
  min-height: 600px;
  width: 100%;
  background-image: url(${backgroundPc});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SP = styled.p`
  height: 410px;
  font-size: 60px;
  font-family: zapfino;
  color: #fff;
`;
