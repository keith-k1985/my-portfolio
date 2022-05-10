import { VFC } from 'react';
import styled from 'styled-components';
import backgroundPc from '../pages/images/bg.jpg';

import { UseStateCounter } from '../../HooksCounterAPP/UseStateCounter';
import { UseEffectCounter } from '../../HooksCounterAPP/UseEffectCounter';
import { UseMemoCounter } from '../../HooksCounterAPP/UseMemoCounter';
import { UseCallbackCounter } from '../../HooksCounterAPP/UseCallbackCounter';
import { UseContextCounter } from '../../HooksCounterAPP/UseContextCounter';
import { UseReducerCounter } from '../../HooksCounterAPP/UseReducerCounter';

export const Admin: VFC = () => {
  return (
    <>
      <SContainer>
        <SWrapper>
          <STitle>カウンターアプリ</STitle>
          <UseStateCounter />
          <UseEffectCounter />
          <UseMemoCounter />
          <UseCallbackCounter />
          <UseContextCounter />
          <UseReducerCounter />
        </SWrapper>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  text-align: center;
  // height: 80vh;
  min-height: 600px;
  width: 100%;
  background-image: url(${backgroundPc});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SWrapper = styled.div`
  // height: 600px;
  width: 800px;
  background-color: #fff;
  margin: 10px;
`;

const STitle = styled.h2`
  font-family: 'Noto Serif', serif;
  text-align: center;
  font-size: 41px;
  letter-spacing: 0.08em;
  margin: 0 auto;
`;
