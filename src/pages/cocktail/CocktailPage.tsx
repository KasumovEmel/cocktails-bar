import {memo} from 'react';

import {CocktailsList, CocktailsListSkeleton} from 'entities/cocktail';
import {useGetCocktails} from 'entities/cocktail/model/useGetCocktails';
import {CONTENT_NAVIGATION_MENU} from 'shared/config/coctails-menu.config';
import {CocktailCodeType} from 'shared/types/coctailsTypes';

import styles from './styles.module.scss';

type CocktailPageProps = {
  code: CocktailCodeType;
};

export const CocktailPage = memo(({code}: CocktailPageProps) => {
  const {isLoading, cocktailsList} = useGetCocktails(code);
  if (code === CONTENT_NAVIGATION_MENU[2]) {
    throw new Error('Test error ErrorBoundary');
  }

  if (isLoading && !cocktailsList) {
    return (
      <div className={styles.cocktailsPage}>
        <CocktailsListSkeleton />
      </div>
    );
  }

  if (!cocktailsList) {
    return null;
  }

  return (
    <div className={styles.cocktailsPage}>
      <CocktailsList cocktailsList={cocktailsList} />
    </div>
  );
});

CocktailPage.displayName = 'CocktailPage';
