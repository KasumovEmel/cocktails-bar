import {CocktailApiResponse} from 'shared/types';
import {CocktailCodeType} from 'shared/types/coctailsTypes';

export class CocktailService {
  static async getCocktailsByCode(
    code: CocktailCodeType
  ): Promise<CocktailApiResponse> {
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code}`
      );
      const data: CocktailApiResponse = await res.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}
