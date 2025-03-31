import {FC, JSX} from 'react';

import {ErrorBoundary} from 'react-error-boundary';

import {Fallback} from 'shared/ui';

type IProviders = {
  readonly children: JSX.Element;
};

export const Providers: FC<IProviders> = ({children}) => (
  <ErrorBoundary FallbackComponent={Fallback}>{children}</ErrorBoundary>
);
