import { styled } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import mike from '../public/mike.jpeg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useRouter } from 'next/router';
interface mikeProps {
  bg: string;
}

export const Mike: React.FC<mikeProps> = ({}) => {
  const [showEmail, setShowEmail] = React.useState(false);
  const router = useRouter();
  return (
    <>
      <Head>
        <title>About me - Michael E Adebisi - Software Engineer</title>
      </Head>
      <AboutWrapper> 
        <ImageAndName>
          <Image src={mike} alt='Michael Adebisi' height={100} width={100} />
          <NameText>
            <Name>Michael E Adebisi</Name> <Title>Software Engineer</Title>
          </NameText>
        </ImageAndName>
        <BioDetails>
          Poised, professional, and product-oriented Website and Application
          Engineer with years of experience working in a variety of fast-paced,
          dynamic, and ever-changing settings. Experience includes working with
          and leading development teams in building and designing User
          Experiences, Interfaces, GraphQL and RESTApis, integrating SQL/NoSQL
          database client-server applications, developing high-quality in-house
          and automation tools to ease the development, management, and scaling
          of web and mobile products.
        </BioDetails>
        <SocialLinks>
          <SocialLink
            onClick={() => router.push('https://github.com/super-devmike')}
            bg='#171923'
          >
            <GitHubIcon fontSize='small' />
            Github
          </SocialLink>
          <SocialLink
            onClick={() => router.push('https://linkedin.com/in/mikeadebisi')}
            bg='#0072b1'
          >
            <LinkedInIcon fontSize='small' />
            LinkedIn
          </SocialLink>
          <SocialLink
            onClick={() => router.push('https://twitter.com/devmikellc')}
            bg='#00acee'
          >
            <TwitterIcon fontSize='small' />
            Twitter
          </SocialLink>
          <SocialLink
            onClick={() => router.push('https://fb.me/devmikellc')}
            bg='#3b5998'
          >
            <FacebookIcon fontSize='small' />
            Facebook
          </SocialLink>
        </SocialLinks>
        <Email>
          <p>Email</p>
          <RevealButton onClick={() => setShowEmail(!showEmail)}>
            {showEmail ? 'hide' : 'reveal'}
          </RevealButton>
        </Email>
        {showEmail && (
          <EmailDetails
            onClick={() => router.push('mailto:devmikellc@gmail.com')}
          >
            devmikellc@gmail.com
          </EmailDetails>
        )}
      </AboutWrapper>
    </>
  );
};

const AboutWrapper = styled('div')(({ theme }) => ({
  height: '100vh',
  margin: '2rem 29% 0',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  [theme.breakpoints.down('lg')]: {
    margin: '2rem 15% 0',
  },
  [theme.breakpoints.down('md')]: {
    height:'100%'

  },
}));
const ImageAndName = styled('div')(({ theme }) => ({
  fontFamily: 'Cabin',
  display: 'flex',
  alignItems: 'center',
  '& img': {
    borderRadius: '50%',
    border: '5px solid #2D3748!important',
  },
}));
const NameText = styled('div')(({ theme }) => ({
  marginLeft: '1rem',
}));
const Name = styled('div')(({ theme }) => ({
  fontSize: '1.6rem',
}));
const Title = styled('div')(({ theme }) => ({
  fontSize: '1rem',
}));
const BioDetails = styled('div')(({ theme }) => ({
  fontFamily: 'Cabin',
  fontSize: '1rem',
  marginTop: '2rem',
}));
const SocialLinks = styled('div')(({ theme }) => ({
  marginTop: '2rem',
  display: 'flex',
  gap: '1rem',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection:'column',
    gap: '1rem',
  },
}));

const SocialLink = styled('div')<mikeProps>(({ theme, bg }) => ({
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #2D3748',
  background: bg || '#171923',
  padding: '0.5rem .5rem',
  fontSize: '14px',
  cursor: 'pointer',

  '&:hover': {
    background: '#2D3748',
    color: '#CBD5E0',
  },
  '& svg': {
    marginRight: '0.5rem',
  },
}));
const Email = styled('div')(({ theme }) => ({
  marginTop: '2rem',
  display: 'flex',
  alignItems: 'center',
}));
const RevealButton = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  background: '#2D3748',
  color: '#CBD5E0',
  padding: '0.1rem .5rem',
  marginLeft: '1rem',
}));
const EmailDetails = styled('div')(({ theme }) => ({
  fontSize: '1rem',
  borderBottom: '1px solid #2D3748',
  cursor: 'pointer',
}));
export default Mike;
