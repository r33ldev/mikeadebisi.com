import { styled } from '@mui/system';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <HomeWrapper>
        <JumboWrapper>
          <JumboName>Michael E Adebisi</JumboName>
        </JumboWrapper>
      </HomeWrapper>
    </>
  );
};

const HomeWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const JumboWrapper = styled('div')(({ theme }) => ({
  marginTop: '4rem',
}));
const JumboName = styled('div')(({ theme }) => ({
  // backgroundImage: 'linear-gradient(to right, #f6d365 0%, #fda085 100%)',
  fontSize: '4rem',
  fontFamily:'Cabin',
  fontWeight: 'bold',
  background: '#4299e1',
  color: 'transparent',
  backgroundImage: 'linear-gradient(to left, #79c2ff, #4a5888)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  backgroundBlendMode: 'multiply',
  backgroundPosition: 'center',
  '-webkit-animation': 'shine 10s infinite linear',

  '@keyframes shine': {
    from: {
      '-webkit-filter': 'hue-rotate(0deg)',
    },
    to: {
      '-webkit-filter': 'hue-rotate(-360deg)',
    },
  },
}));
export default Home;
