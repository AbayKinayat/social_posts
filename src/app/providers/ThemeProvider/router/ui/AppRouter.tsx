import { Suspense, memo, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { routeConfig } from '../config/routeConfig';

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
    if (route.authOnly) {
      return Boolean(isAuth);
    }
    return true;
  }), [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {
          routes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={element}
            />
          ))
      }
      </Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
