import {Drink} from 'shared/types';
import {CocktailCodeType} from 'shared/types/coctailsTypes';

import {useCocktailStore} from '../cocktailStore';

describe('useCocktailStore', () => {
  const mockDrink: Drink = {
    idDrink: '123',
    strDrink: 'Mojito',
    strCategory: 'Cocktail',
    strAlcoholic: 'Alcoholic',
    strGlass: 'Highball glass',
    strInstructions: 'Mix ingredients and serve over ice.',
    strDrinkThumb:
      'https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg',

    strIngredient1: 'White Rum',
    strIngredient2: 'Mint',
    strIngredient3: 'Sugar',
    strIngredient4: 'Lime',
    strIngredient5: 'Soda Water',
    strIngredient6: null,
    strIngredient7: null,

    strMeasure1: '50ml',
    strMeasure2: '10 leaves',
    strMeasure3: '2 tsp',
    strMeasure4: '1/2',
    strMeasure5: 'Top up',
    strMeasure6: null,
    strMeasure7: null
  };

  const code: CocktailCodeType = 'mojito';

  beforeEach(() => {
    useCocktailStore.setState({cocktailsByCode: {}});
  });

  it('should set and get cocktails by code', () => {
    useCocktailStore.getState().setCocktails(code, [mockDrink]);

    const result = useCocktailStore.getState().getCocktails(code);
    expect(result).toEqual([mockDrink]);
  });

  it('should return undefined for unknown code', () => {
    const result = useCocktailStore
      .getState()
      .getCocktails('nonexistent' as CocktailCodeType);
    expect(result).toBeUndefined();
  });
});
