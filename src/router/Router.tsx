import { VFC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomeRoutes } from './HomeRoutes';
import { Page404 } from '../components/pages/Page404';
import { DefaultLayout } from '../components/templates/DefaultLayout';

export const Router: VFC = () => {
  return (
    <Switch>
      <Route
        path='/'
        render={({ match: { url } }) => (
          <Switch>
            {HomeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${route.path}`}
              >
                <DefaultLayout>{route.children}</DefaultLayout>
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path='*'>
        <Page404 />
      </Route>
    </Switch>
  );
};
