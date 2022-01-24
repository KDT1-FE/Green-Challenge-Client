import React from 'react';
import styled from 'styled-components';

interface CommonProps {
  children: React.ReactNode;
}

function Layout({children}: CommonProps) {
  return <Wrapper>{children}</Wrapper>;
}

Layout.Header = styled.header`
  position: fixed;
  transform: translateX(-50%);
  z-index: 1;
  top: 0;
  left: 50%;
  max-width: 360px;
  height: 52px;
  display: flex;
  margin-top: 24px;
  justify-content: space-around;
  align-items: center;
`;

Layout.Main = styled.main`
  position: fixed;
  transform: translateX(-50%);
  z-index: 1;
  top: 76px;
  left: 50%;
  width: 100%;
  display: flex;
  bottom: 0;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 360px;
  background-color: white;
`;

export {Layout};
