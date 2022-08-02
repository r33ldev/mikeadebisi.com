import { styled } from '@mui/system';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Contact from '../src/components/contact-component/Contact';
import mike from '../public/mike.jpeg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <HomeWrapper>
        <ImageWrapper>
          <Image src={mike} height={100} width={100} />
        </ImageWrapper>
        <Description>
          <Name>
            <h1>Hi, I am Michael</h1>
            <a
              href='https://devmike.wtf'
              target='_blank'
              
              rel='noreferrer'
            >
              Developer portfolio <ArrowRightAltIcon />
            </a>
          </Name>
          <Details>
            <h4>WTH am I?</h4>
            <p>
              I am{' '}
              <a
                href='https://twitter.com/devmikellc'
                target='_blank'
                
                rel='noreferrer'
              >
                @devmikellc
              </a>{' '}
              and{' '}
              <a
                href='https://github.com/super-devmike'
                target='_blank'
                
                rel='noreferrer'
              >
                @super-devmike
              </a>{' '}
              a full stack web and application developer from Abuja, Nigeria.
            </p>
            <p>
              I am a self-taught developer with a passion for learning and
              building things. I share everything I learn and know about making
              awesome things at my developer portfolio{' '}
              <a
                href='https://devmike.wtf'
                target='_blank'
                
                rel='noreferrer'
              >
                devmike.wtf.
              </a>
            </p>
            <p>
              You can check my projects{' '}
              <a
                href='https://devmike.wtf/projects'
                target='_blank'
                
                rel='noreferrer'
              >
                here
              </a>{' '}
              and articles{' '}
              <a
                href='https://devmike.wtf/articles'
                target='_blank'
                
                rel='noreferrer'
              >
                here.
              </a>
            </p>
            <p>
              I am currently <small>not</small> open for full time role, but
              feel free to check my resume{' '}
              <a
                href='https://assets.mikeadebisi.com/hire/michael_adebisi_resume.pdf'
                target='_blank'
                
                rel='noreferrer'
              >
                here
              </a>
              .
            </p>
          </Details>
          <ContactWrapper>
            <Contact />
          </ContactWrapper>
        </Description>
      </HomeWrapper>
    </>
  );
};

const HomeWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '2rem',
  margin: '2rem 7rem',
  height: '100%',
  fontFamily: 'Cabin',
  marginTop: ' -2rem',
  
  [theme.breakpoints.down('sm')]: {
    margin: '2rem 1rem',
    flexDirection:'column'
  },

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
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));

const Description = styled('div')(({ theme }) => ({
  width: '50%',

  [theme.breakpoints.down('lg')]: {
    width: '70%',
  },
  [theme.breakpoints.down('md')]: {
    width: '80%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '90%',
  },
}));
const Name = styled('div')(({ theme }) => ({
  lineHeight: '.3',
  '& a': {
    color: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  [theme.breakpoints.down('sm')]: {
    lineHeight: '1.2'
  },
}));

const Details = styled('div')(({ theme }) => ({
  margin: '2rem 0',
  color: '#3d4852',
  lineHeight: '.1',
  fontSize: '1.2rem',

  '& p': {
    lineHeight: '1.5',
  },

  '& a': {
    color: theme.palette.primary.main,
    // display: 'flex',
    // alignItems: 'center',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));
const ContactWrapper = styled('div')(({ theme }) => ({
  // marginTop: '6rem',
  width: '100%',
}));
export default Home;
