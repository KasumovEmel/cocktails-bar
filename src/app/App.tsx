import {Providers} from './providers/Providers';
import {AppRouter} from './router/AppRouter';

export const App = () => (
  <Providers>
    <AppRouter />
  </Providers>
);
