import {renderHook, act, waitFor} from '@testing-library/react';

import {CocktailService} from 'shared/api/CocktailService';
import {Drink} from 'shared/types';
import {CocktailCodeType} from 'shared/types/coctailsTypes';

import {useCocktailStore} from '../cocktailStore';
import {useGetCocktails} from '../useGetCocktails';

jest.mock('shared/api/CocktailService');
jest.mock('../cocktailStore');

describe('useGetCocktails', () => {
  const mockDrink: Drink = {
    idDrink: '123',
    strDrink: 'Mojito',
    strCategory: 'Cocktail',
    strAlcoholic: 'Alcoholic',
    strGlass: 'Glass',
    strInstructions: 'Mix it.',
    strDrinkThumb: 'img.jpg',
    strIngredient1: 'Rum',
    strIngredient2: null,
    strMeasure1: '50ml',
    strMeasure2: null
  };

  const code: CocktailCodeType = 'mojito';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches and stores cocktails when not cached', async () => {
    const getCocktails = jest.fn().mockReturnValue(undefined);
    const setCocktails = jest.fn();

    (useCocktailStore as unknown as jest.Mock).mockReturnValue({
      getCocktails,
      setCocktails
    });

    (CocktailService.getCocktailsByCode as jest.Mock).mockResolvedValue({
      drinks: [mockDrink]
    });

    const {result} = renderHook(() => useGetCocktails(code));

    await waitFor(() => {
      expect(setCocktails).toHaveBeenCalledWith(code, [mockDrink]);
    });

    expect(getCocktails).toHaveBeenCalledWith(code);
    expect(CocktailService.getCocktailsByCode).toHaveBeenCalledWith(code);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it('uses cached data if available and does not fetch', async () => {
    const getCocktails = jest.fn().mockReturnValue([mockDrink]);
    const setCocktails = jest.fn();

    (useCocktailStore as unknown as jest.Mock).mockReturnValue({
      getCocktails,
      setCocktails
    });

    const {result} = renderHook(() => useGetCocktails(code));

    await act(() => Promise.resolve()); // минимальное ожидание

    expect(CocktailService.getCocktailsByCode).not.toHaveBeenCalled();
    expect(setCocktails).not.toHaveBeenCalled();
    expect(result.current.cocktailsList).toEqual([mockDrink]);
  });

  it('sets error on request failure', async () => {
    const getCocktails = jest.fn().mockReturnValue(undefined);
    const setCocktails = jest.fn();

    (useCocktailStore as unknown as jest.Mock).mockReturnValue({
      getCocktails,
      setCocktails
    });

    (CocktailService.getCocktailsByCode as jest.Mock).mockRejectedValue(
      new Error('Network error')
    );

    const {result} = renderHook(() => useGetCocktails(code));

    await waitFor(() => {
      expect(result.current.error).toBe('Network error');
    });

    expect(result.current.isLoading).toBe(false);
    expect(setCocktails).not.toHaveBeenCalled();
  });
});
