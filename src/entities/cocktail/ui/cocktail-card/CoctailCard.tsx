import {memo, useMemo} from 'react';

import {Drink} from 'shared/types';
import {ImageLazy} from 'shared/ui';

import styles from './styles.module.scss';

type CoctailsCardProps = {
  drink: Drink;
};

export const CocktailCard = memo(({drink}: CoctailsCardProps) => {
  const listOfIngredients = useMemo(
    () =>
      Array.from({length: 15}).reduce((list: [string, string][], _, i) => {
        const measure = drink[`strMeasure${i + 1}`];
        const ingredient = drink[`strIngredient${i + 1}`];

        if (measure && ingredient) {
          list.push([measure, ingredient]);
        }

        return list;
      }, []),
    []
  );

  return (
    <div className={styles.drink}>
      <div className={styles.drinkInfo}>
        <h2 className={styles.drinkTitle}>{drink.strDrink}</h2>
        <div>
          <span className={styles.drinkLabel}>Category:</span>{' '}
          {drink.strCategory}
        </div>
        <div>
          <span className={styles.drinkLabel}>Type:</span> {drink.strAlcoholic}
        </div>
        <div>
          <span className={styles.drinkLabel}>Glass:</span> {drink.strGlass}
        </div>

        <div className={styles.drinkInstructions}>
          <div className={styles.drinkLabel}>Instructions:</div>
          {drink.strInstructions}
        </div>

        <div className={styles.drinkIngredients}>
          <div className={styles.drinkLabel}>List of ingredients:</div>
          <ul>
            {listOfIngredients.map(([measure, ingredient], i) => {
              return (
                <li key={i}>
                  {measure} {ingredient}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <ImageLazy
        alt={drink.strDrink}
        className={styles.drinkImage}
        height={200}
        src={drink.strDrinkThumb}
        width={200}
      />
    </div>
  );
});

CocktailCard.displayName = 'CocktailCard';
