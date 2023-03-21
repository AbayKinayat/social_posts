import { Suspense } from 'react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar';
import { Navbar } from 'widgets/Navbar';

import { AppRouter } from './providers/ThemeProvider/router';
import './styles/index.scss';

export function App() {
  return (
    <div className="app">
      <Suspense fallback="Loading...">
        <Navbar className="app__navbar" />
        <Sidebar />
        <AppRouter />
      </Suspense>
    </div>
  );
}
