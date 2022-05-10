import { ChangeEvent, useState, VFC } from 'react';
import styled from 'styled-components';
import { UseAuth } from '../../Hooks/UseAuth';
import backgroundPc from '../pages/images/bg.jpg';

export const Login: VFC = () => {
  const { login } = UseAuth();
  const [userId, setUserId] = useState('');

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);

  const onClickLogin = () => login(userId);

  return (
    <>
      <SContainer>
        <SWrapper>
          <STitle>Login</STitle>
          <SInputWrap>
            <SInput
              type='text'
              placeholder='ユーザーID'
              value={userId}
              onChange={onChangeUserId}
            />
            <SButton onClick={onClickLogin}>ログイン</SButton>
          </SInputWrap>
        </SWrapper>
      </SContainer>
    </>
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
  align-items: center;
  flex-direction: column;
`;

const SWrapper = styled.div`
  height: 600px;
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

const SInputWrap = styled.div`
  min-width: 300px;
  max-width: 550px;
  width: 30%;
  margin: 100px auto 0px;
  display: flex;
  flex-direction: column;
`;

const SInput = styled.input`
  margin: 4px;
`;

const SButton = styled.button`
  color: #fff;
  height: 40px;
  width: 30%;
  margin: 30px auto 0;
  background: #333;
  border: none;
  outline: none;
  :disabled {
    background: gray;
  }
  &:hover {
    cursor: pointer;
    background-color: #59b1eb;
    color: #fff;
  }
`;
