import {create} from 'zustand';

import {Drink} from 'shared/types';
import {CocktailCodeType} from 'shared/types/coctailsTypes';

type CocktailStore = {
  cocktailsByCode: Record<string, Drink[]>;
  setCocktails: (code: CocktailCodeType, data: Drink[]) => void;
  getCocktails: (code: CocktailCodeType) => Drink[] | undefined;
};

export const useCocktailStore = create<CocktailStore>((set, get) => ({
  cocktailsByCode: {},

  setCocktails: (code, data) =>
    set(state => ({
      cocktailsByCode: {
        ...state.cocktailsByCode,
        [code]: data
      }
    })),

  getCocktails: code => get().cocktailsByCode[code]
}));
