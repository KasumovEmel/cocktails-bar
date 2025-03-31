import {useEffect, useState} from 'react';

import {CocktailService} from 'shared/api/CocktailService';
import {Drink} from 'shared/types';
import {CocktailCodeType} from 'shared/types/coctailsTypes';

import {useCocktailStore} from './cocktailStore';

export const useGetCocktails = (code: CocktailCodeType) => {
  const {getCocktails, setCocktails} = useCocktailStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cocktailsList: Drink[] | undefined = getCocktails(code);

  useEffect(() => {
    const fetchCocktails = async () => {
      if (!cocktailsList || cocktailsList.length === 0) {
        setIsLoading(true);
        setError(null);

        try {
          const response = await CocktailService.getCocktailsByCode(code);
          setCocktails(code, response.drinks ?? []);
        } catch (e) {
          setError((e as Error).message);
        } finally {
          setIsLoading(false);
        }
      }
    };

    void fetchCocktails();
  }, [code]);

  return {
    isLoading,
    error,
    cocktailsList: getCocktails(code)
  };
};
