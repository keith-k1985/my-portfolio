import { memo, VFC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header: VFC = memo(() => {
  return (
    <SHeader>
      <STitle>
        KEITH-K
        <br />
        PROJECT
      </STitle>
      <SNav>
        <SUl>
          <SLink to='/'>Home</SLink>
          <SLink to='/about'>About</SLink>
          <SLink to='/skill'>Skill</SLink>
          <SLink to='/contact'>Contact</SLink>
          <SLink to='/todo'>TODO</SLink>
          <SLink to='/login'>Login</SLink>
          {/* <SLink to='/admin'>Admin</SLink> */}
        </SUl>
      </SNav>
    </SHeader>
  );
});

const SHeader = styled.div`
  background-color: #fff;
  height: 110px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const STitle = styled.h1`
  color: #000;
  font-family: Arial Black;
  padding: 0 24px;
`;

const SNav = styled.nav`
  height: 66px;
  background-color: #fff;
`;

const SUl = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const SLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  &:hover {
    cursor: pointer;
`;
