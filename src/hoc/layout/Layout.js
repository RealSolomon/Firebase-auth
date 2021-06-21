import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Navbar from '../../components/Navigation/Navbar/Navbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const MainWrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 6rem);
  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children }) => {
  const loggedIn = useSelector((state) => state.firebase.auth);

  return (
    <>
      <Navbar loggedIn={loggedIn} />
      <SideDrawer loggedIn={loggedIn} />
      <MainWrapper>{children}</MainWrapper>
    </>
  );
};

export default Layout;
