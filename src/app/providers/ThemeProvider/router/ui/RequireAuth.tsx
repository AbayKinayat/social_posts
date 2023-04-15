import { getUserAuthData } from 'entities/User';
import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/route';

interface RequireAuthProps {
  children: ReactNode
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  console.log('auth', auth);

  if (!auth) {
    return (
      <Navigate
        to={RoutePath.main}
        state={{
          from: location,
        }}
        replace
      />
    );
  }

  return (
    <>{children}</>
  );
};
