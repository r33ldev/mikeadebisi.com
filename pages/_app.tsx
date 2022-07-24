import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import theme from '../src/container/app-container/theme';
import AppWrapper from '../src/components/app-components/app';
import '../styles/globals.css';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <React.Fragment>
      <Head>
        <title>Michael E Adebisi - Software Engineer</title>
        <link href='/favicon.ico' rel='icon' />
        <meta
          content='minimum-scale=1, initial-scale=1, width=device-width'
          name='viewport'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </ThemeProvider>
    </React.Fragment>
  );
}
