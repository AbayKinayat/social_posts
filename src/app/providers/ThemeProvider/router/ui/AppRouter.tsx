import { Suspense, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { routeConfig } from '../config/routeConfig';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {
        Object.values(routeConfig).map(({ path, element, authOnly }) => (
          <Route
            key={path}
            path={path}
            element={
              authOnly ? (
                <RequireAuth>
                  {element}
                </RequireAuth>
              ) : element
            }
          />
        ))
      }
    </Routes>
  </Suspense>
);

export default memo(AppRouter);
