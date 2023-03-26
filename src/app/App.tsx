import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Sidebar } from 'widgets/Sidebar';
import { Navbar } from 'widgets/Navbar';
import { userActions } from 'entities/User';

import { AppRouter } from './providers/ThemeProvider/router';
import './styles/index.scss';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
