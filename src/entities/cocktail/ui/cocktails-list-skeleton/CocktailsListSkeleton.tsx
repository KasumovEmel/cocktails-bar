import styles from './styles.module.scss';
import {CocktailCardSkeleton} from '../cocktail-card-skeleton/CocktailCardSceleton';

export const CocktailsListSkeleton = () => {
  return (
    <div className={styles.list}>
      {Array.from({length: 4}).map((_, i) => (
        <CocktailCardSkeleton key={i} />
      ))}
    </div>
  );
};
