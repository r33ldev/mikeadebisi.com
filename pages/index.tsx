import { styled } from '@mui/system';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Contact from '../src/components/contact-component/Contact';
import mike from '../public/mike.jpeg';

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <HomeWrapper>
        <ImageWrapper>
          <Image src={mike} height={100} width={100}/>
        </ImageWrapper>
        <ContactWrapper>
          <Contact />
        </ContactWrapper>
      </HomeWrapper>
    </>
  );
};

const HomeWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '2rem',
  margin: '2rem 7rem',
  height: '100%',
}));

const ImageWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  '& img': {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '50%',
    border: '5px solid #2D3748!important',
  },
}));

const ContactWrapper = styled('div')(({ theme }) => ({
  // marginTop: '6rem',
  width: '100%',
}));
export default Home;
