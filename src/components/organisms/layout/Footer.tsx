import { memo, VFC } from 'react';
import styled from 'styled-components';

export const Footer: VFC = memo(() => {
  return (
    <SFotter>
      <SP>&copy; 2022 Keith-K Project </SP>
    </SFotter>
  );
});

const SFotter = styled.div`
  background-color: #220000;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SP = styled.p`
  color: #fff;
`;
