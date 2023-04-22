import { getUserAuthData, userActions } from 'entities/User';
import {
  FC, ReactNode, useEffect, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/route';

interface RequireAuthProps {
  children: ReactNode
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();
  const [inited, setInited] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth) {
      dispatch(userActions.initAuthData());
    }
    setInited(true);
  }, [dispatch]);

  if (inited && !auth) {
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
    <>{inited && children}</>
  );
};
