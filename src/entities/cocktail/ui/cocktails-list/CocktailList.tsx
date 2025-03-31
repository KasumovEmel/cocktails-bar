import {memo} from 'react';

import {Drink} from 'shared/types';

import {CocktailCard} from '../cocktail-card/CoctailCard';

type CocktailsListProps = {
  cocktailsList: Drink[];
};

export const CocktailsList = memo(({cocktailsList}: CocktailsListProps) => {
  return (
    <>
      {cocktailsList.map(drink => (
        <CocktailCard drink={drink} key={drink.idDrink} />
      ))}
    </>
  );
});

CocktailsList.displayName = 'CocktailsList';
