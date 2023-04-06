import React from 'react';
import { useUser } from 'components/Hooks/useUser';
import { Navigate } from 'react-router-dom';
import { PAGE_NAMES } from 'components/Router/paths';

export const PublicRouter = ({ children }) => {
  const { isAuth } = useUser();

  return (
    <>{isAuth ? <Navigate to={PAGE_NAMES.contacts} replace /> : children}</>
  );
};
