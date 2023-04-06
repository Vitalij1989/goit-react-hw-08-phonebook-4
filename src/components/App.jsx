import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PAGE_NAMES } from './Router/paths';
import { MainLayouts } from './Layouts/MainLayouts/MainLayouts';
import { Homepage } from 'pages/Homepage/Homepage';
import { Contacts } from 'pages/Contacts/Contacts';
import { Registration } from './Registration/Registration';
import { Login } from './Login/Login';
import { PrivateRouter } from './PrivateRouter/PrivateRouter';
import { PublicRouter } from './PublicRouter/PublicRouter';
import { ErrorPage } from 'pages/ErrorPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={PAGE_NAMES.homepage} element={<MainLayouts />}>
          <Route index path={PAGE_NAMES.homepage} element={<Homepage />} />
          <Route
            path={PAGE_NAMES.contacts}
            element={
              <PrivateRouter>
                <Contacts />
              </PrivateRouter>
            }
          />
          <Route
            path={PAGE_NAMES.register}
            element={
              <PublicRouter>
                <Registration />
              </PublicRouter>
            }
          />
          <Route
            path={PAGE_NAMES.login}
            element={
              <PublicRouter>
                <Login />
              </PublicRouter>
            }
          />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
