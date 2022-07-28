import { styled } from '@mui/system';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Contact from '../src/components/contact-component/Contact';

const Home: NextPage = () => {
  const ARTICLES = [
    {
      date: 'September 19, 2022',
      title: 'Renderless Components in Nextjs',
      extract:
        'How to create Next js components that are easy to customize by splitting presentation and behavior into separate components.',
      slug: '/renderless-components-in-nextjs',
    },
    {
      date: 'September 19, 2022',
      title: 'Methods Are Affordances, Not Abilities',
      extract:
        'How thinking that “an object shouldn’t be able to save itself” exposes a fundamental misunderstanding of OOP, and how you should think instead.',
      slug: '/renderless-components-in-nextjs',
    },
    {
      date: 'September 19, 2022',
      title: 'Refactoring Loops and Conditionals',
      extract:
        'Earlier this week, a developer asked the Rails subreddit to help refactor some code they had written for an interview.',
      slug: '/renderless-components-in-nextjs',
    },
  ];
  const PROJECTS = [
    {
      name: 'Love Meter',
      description: 'Calculate how much your crush loves you',
      url: 'https://calculate.lol',
    },
    {
      name: 'Strimr',
      description: 'Stream your favorite songs in one app freely',
      url: 'https://super-devmike.github.io/strimr/',
    },
  ];
  const router = useRouter();
  return (
    <>
      <HomeWrapper>
        <JumboWrapper>
          <JumboName>Michael E Adebisi</JumboName>
          <JumboText>
            I am a <span>Software Engineer</span>, and loves
            <span> Developing</span> for the web, <span> Writing</span> and
            <span> Building Open Source </span> projects.
          </JumboText>
        </JumboWrapper>
        <ArticlesWrapper>
          <ArticleHeader>
            <Title>Articles</Title>
            <SectionButton onClick={() => router.push('/articles')}>
              View all articles
            </SectionButton>
          </ArticleHeader>

          {ARTICLES.map((article, index) => (
            <Article
              key={index}
              onClick={() => router.push('/articles/' + article.slug)}
            >
              <ArticleDate>{article.date}</ArticleDate>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleExtract>{article.extract}</ArticleExtract>
            </Article>
          ))}
        </ArticlesWrapper>
        <ProjectsWrapper>
          <ProjectHeader>
            <Title>Projects</Title>
            <SectionButton onClick={() => router.push('/projects')}>
              View all projects
            </SectionButton>
          </ProjectHeader>
          {PROJECTS.map((project, index) => (
            <Project
              key={index}
              onClick={() => router.push(project.url)}
              // onClick={() => router.push('/projects/' + project.name.toLocaleLowerCase().replace(/ /g, '-'))}
            >
              <ProjectName>{project.name}</ProjectName>
              <p>{project.description}</p>
            </Project>
          ))}
        </ProjectsWrapper>
        <ContactWrapper>
          <Contact />
        </ContactWrapper>
      </HomeWrapper>
    </>
  );
};

const HomeWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  background: '#000000',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '4rem 24% 0',

  [theme.breakpoints.down('lg')]: {
    margin: '4rem 15% 0'
  }
}));

const JumboWrapper = styled('div')(({ theme }) => ({
  textAlign: 'center',
}));
const JumboName = styled('div')(({ theme }) => ({
  // backgroundImage: 'linear-gradient(to right, #f6d365 0%, #fda085 100%)',
  fontSize: '4rem',
  fontFamily: 'Cabin',
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
  [theme.breakpoints.down('md')]: {
   fontSize:'3rem'
  },
}));
const JumboText = styled('div')(({ theme }) => ({
  fontFamily: 'Cabin',
  fontSize: '2rem',
  color: '#718096',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },

  span: {
    color: '#CBD5E0',
  },
}));
const ArticlesWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  marginTop: '6rem',
}));
const ArticleHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
}));
const ProjectHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
}));
const Title = styled('div')(({ theme }) => ({
  fontSize: '1.3rem',
}));
const SectionButton = styled('div')(({ theme }) => ({
  border: '1px solid #2D3748',
  background: '#171923',
  padding: '0.5rem .5rem',
  fontSize: '14px',
  cursor: 'pointer',

  '&:hover': {
    background: '#2D3748',
    color: '#CBD5E0',
  },
}));

const Article = styled('div')(({ theme }) => ({
  fontFamily: 'Cabin',
  marginBottom: '2rem',
  cursor: 'pointer',
}));
const ArticleTitle = styled('div')(({ theme }) => ({
  fontSize: '1.6rem',
  color: '#4299E1',
  [theme.breakpoints.down('sm')]: {
    fontSize:'1.2rem'
  },
}));
const ArticleDate = styled('div')(({ theme }) => ({
  fontSize: '14px',
}));
const ArticleExtract = styled('div')(({ theme }) => ({
  fontSize: '1.2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    
  },
}));

const ProjectsWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  marginTop: '6rem',
}));

const Project = styled('div')(({ theme }) => ({
  padding: '1rem',
  fontFamily: 'Cabin',
  marginBottom: '2rem',
  cursor: 'pointer',
  background: '#171923',
  border: '1px solid #2D3748',
}));
const ProjectName = styled('div')(({ theme }) => ({
  fontSize: '1.4rem',
  color: '#4299E1',
}));

const ContactWrapper = styled('div')(({ theme }) => ({
  marginTop: '6rem',
  width: '100%',
  
}));
export default Home;
