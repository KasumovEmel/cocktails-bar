import {memo} from 'react';

import notFoundImage from 'shared/assets/images/not-found.webp';

import styles from './styles.module.scss';

export const NotFoundPage = memo(() => {
  return (
    <div className={styles.container}>
      <img
        alt="Not found"
        className={styles.image}
        height={200}
        loading="lazy"
        src={notFoundImage}
        width={200}
      />
      <h2 className={styles.title}>Oops! Page not found</h2>
      <p className={styles.text}>We couldn't find what you were looking for.</p>
    </div>
  );
});

NotFoundPage.displayName = 'NotFoundPage';
