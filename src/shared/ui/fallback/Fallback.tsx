import {memo} from 'react';

import {Link, useRouteError} from 'react-router-dom';

import fallbackImg from 'shared/assets/images/fallback.webp';

import styles from './styles.module.scss';

export type RejectedDataType = {
  readonly messageError: string;
  readonly status?: string;
};

export const Fallback = memo(() => {
  const error = useRouteError();
  const knownError = error as RejectedDataType;

  return (
    <div className={styles.fallback} role="alert">
      <img
        alt="fallback"
        className={styles.img}
        height={300}
        loading="lazy"
        src={fallbackImg}
        width={300}
      />
      <h1 className={styles.title}>Something went wrong</h1>
      <span className={styles.describe}>
        {knownError.messageError} {knownError.status}
      </span>
      <Link className={styles.link} to="/">
        Go to home page
      </Link>
    </div>
  );
});

Fallback.displayName = 'Fallback';
