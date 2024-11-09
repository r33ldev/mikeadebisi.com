import { styled } from '@mui/system';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import mike from "../../../public/mike.jpeg";

interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
    const router = useRouter()
  // const LINKS = [
    // { link: 'Projects', label: 'Projects', url: '/projects' },
    // { link: 'Articles', label: 'Articles', url: '/articles' },
    // { link: 'Guides', label: 'Guides', url: '/guides' },
    // { link: 'About', label: 'About', url: '/mike' },
    // { link: 'Uses', label: 'Uses', url: '/uses' },
  // ];
  return (
    <HeaderWrapper>
      <LogoWrapper onClick={() => router.push('/')}>
        <Image src={mike} alt='mikeadebisi.com' height={40} width={40} />
      </LogoWrapper>
      {/* <HeaderLinks> */}
        {/* {LINKS.map((link) => (
          <HeaderLink key={link.label} onClick={() => router.push(link.url)}>
            {link.label}
          </HeaderLink>
        ))} */}
      {/* </HeaderLinks> */}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  borderTop: '5px solid #4299E1',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '1.5rem',
  
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    textAlign:'center'
  },
}));
const LogoWrapper = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  '& img': {
    height: '50px',
    borderRadius:'50%'
  },
}));
const HeaderLinks = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '2.5rem',
  [theme.breakpoints.down('md')]: {
    gap: '1rem',
  },
  [theme.breakpoints.down('sm')]: {
    display:'none'
  },
}));
const HeaderLink = styled('div')(({ theme }) => ({
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover': {
        color: '#4299E1',
    },
}));
export default Header;
