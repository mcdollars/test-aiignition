'use client';
import { FunctionComponent, PropsWithChildren, useCallback, useState } from 'react';
import { Stack } from '@mui/material/';
import ErrorBoundary from '../components/ErrorBoundary';
import TopBar from './TopBar';
import { useOnMobile } from '../hooks';
import { TOP_BAR_DESKTOP_HEIGHT, TOP_BAR_MOBILE_HEIGHT } from './config';

// TODO: change to your app name or other word
const TITLE_PUBLIC = 'AI Ignition'; // Title for pages without/before authentication

/**
 * Renders "Public Layout" composition
 * @layout PublicLayout
 */
const PublicLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const onMobile = useOnMobile();
  const title = TITLE_PUBLIC;

  return (
    <Stack
      sx={{
        minHeight: '100vh', // Full screen height
        paddingTop: onMobile ? TOP_BAR_MOBILE_HEIGHT : TOP_BAR_DESKTOP_HEIGHT,
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
        }}
      >
        <ErrorBoundary name="Content">{children}</ErrorBoundary>
      </Stack>
    </Stack>
  );
};

export default PublicLayout;
