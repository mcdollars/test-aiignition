'use client';
import {FunctionComponent, PropsWithChildren } from 'react';

import { Stack } from '@mui/material';
import ErrorBoundary from '../components/ErrorBoundary';
import TopBar from './TopBar';

// TODO: change to your app name or other word
const TITLE_PRIVATE = 'AI Ignition'; // Title for pages after authentication

/**
 * Renders "Private Layout" composition
 * @layout PrivateLayout
 */
const PrivateLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const title = TITLE_PRIVATE;

  return (
    <Stack
      direction="column"
      sx={{
        minHeight: '100vh', // Full screen height
      }}
    >
      <Stack component="header">
        <TopBar
          title={title}
        />
      </Stack>

      <Stack
        component="main"
        sx={{
          flexGrow: 1, // Takes all possible space
          padding: 1,
          mt: 10
        }}
      >
        <ErrorBoundary name="Content">{children}</ErrorBoundary>
      </Stack>
    </Stack>
  );
};

export default PrivateLayout;
