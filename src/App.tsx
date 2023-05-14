import React from 'react';
import { AppRoutes } from './App.routes';
import { AuthProvider } from './contexts/auth/provider';

export function App() {
  return (
    <React.Fragment>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </React.Fragment>
  );
}
