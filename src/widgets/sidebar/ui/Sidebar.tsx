import {memo, useCallback, useEffect, useRef} from 'react';

import clsx from 'clsx';
import {useLocation} from 'react-router-dom';

import {CONTENT_NAVIGATION_MENU} from 'shared/config/coctails-menu.config';
import {useViewNavigate} from 'shared/lib/routing/useViewNavigate';
import {CocktailCodeType} from 'shared/types/coctailsTypes';

import styles from './styles.module.scss';

type SidebarProps = {
  contentRef: React.RefObject<HTMLDivElement | null>;
};

export const Sidebar = memo(({contentRef}: SidebarProps) => {
  const location = useLocation();
  const previousPathRef = useRef(location.pathname);
  const viewNavigate = useViewNavigate();

  const onClickHandler = useCallback(
    (path: CocktailCodeType) => () => {
      if (location.pathname !== path) {
        viewNavigate(path);
      }
    },
    []
  );

  useEffect(() => {
    const prev = previousPathRef.current;
    const current = location.pathname;

    if (prev !== current) {
      contentRef.current?.scrollTo({top: 0, behavior: 'smooth'});
      previousPathRef.current = current;
    }
  }, [location.pathname, contentRef]);

  return (
    <aside className={clsx(styles.sidebar)}>
      <ul className={styles.menu}>
        {CONTENT_NAVIGATION_MENU.map(code => (
          <li key={code}>
            <button
              className={clsx(styles.link, {
                [styles.active]: location.pathname === `/${code}`
              })}
              onClick={onClickHandler(code)}
            >
              {code}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
});

Sidebar.displayName = 'Sidebar';
