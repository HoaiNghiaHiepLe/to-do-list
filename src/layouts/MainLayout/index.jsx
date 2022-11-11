import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import * as S from './styles';

function MainLayout() {
  return (
    <>
      <Header />
      <S.MainContainer>
        <S.MainContent>
          <Outlet />
        </S.MainContent>
      </S.MainContainer>
      <Footer />
    </>
  );
}

export default MainLayout;
