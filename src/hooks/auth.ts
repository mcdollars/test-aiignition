import { useCallback } from 'react';
import { useAppStore } from '../store';

export function useIsAuthenticated() {
  const [state] = useAppStore();
  let result = state.isAuthenticated;


  return result;
}

export function useEventLogout() {
  const [, dispatch] = useAppStore();

  return useCallback(() => {
    // TODO: AUTH: replace next line with access token saving

    dispatch({ type: 'LOG_OUT' });
  }, [dispatch]);
}
