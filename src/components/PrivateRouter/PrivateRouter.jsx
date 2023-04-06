import { useUser } from 'components/Hooks/useUser';
import { PAGE_NAMES } from 'components/Router/paths';
import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRouter = ({ children }) => {
  const { isAuth } = useUser();

  return <>{!isAuth ? <Navigate to={PAGE_NAMES.login} replace /> : children}</>;
};
