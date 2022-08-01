import { styled } from '@mui/system';
import React from 'react';
import Header from '../header-components/Header';

interface appProps {
  //   Component: React.ComponentType<any>;
  children: React.ReactNode;
}

export const AppWrapper: React.FC<appProps> = ({ children }) => {
  return (
    <PageLayout>
      <Header />
      {children}
    </PageLayout>
  );
};

const PageLayout = styled('div')(({}) => ({
  color: '#000000',
  background: '#FFFFFF',
  height: '100%',
}));
export default AppWrapper;
