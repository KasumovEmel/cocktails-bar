import {createHashRouter, Navigate, RouterProvider} from 'react-router-dom';

import {Layout} from 'app/layout/Layout';
import {CocktailPage, NotFoundPage} from 'pages';
import {CONTENT_NAVIGATION_MENU} from 'shared/config/coctails-menu.config';
import {Fallback} from 'shared/ui';

const [defaultCocktail] = CONTENT_NAVIGATION_MENU;

export const AppRouter = () => {
  const cocktailRoutes = CONTENT_NAVIGATION_MENU.map(code => ({
    path: code.toLowerCase(),
    element: <CocktailPage code={code} />
  }));

  const router = createHashRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Fallback />,
      children: [
        {
          index: true,
          element: <Navigate replace to={`/${defaultCocktail}`} />
        },
        ...cocktailRoutes,
        {
          path: '*',
          element: <NotFoundPage />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};
