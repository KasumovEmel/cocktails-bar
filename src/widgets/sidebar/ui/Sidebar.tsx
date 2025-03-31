import {memo, RefObject, useEffect, useRef} from 'react';

import clsx from 'clsx';
import {NavLink, useLocation} from 'react-router-dom';

import {CONTENT_NAVIGATION_MENU} from 'shared/config/coctails-menu.config';

import styles from './styles.module.scss';

type SidebarProps = {
  contentRef: RefObject<HTMLDivElement> | null;
};

export const Sidebar = memo(({contentRef}: SidebarProps) => {
  const location = useLocation();
  const previousPathRef = useRef(location.pathname);

  useEffect(() => {
    const prev = previousPathRef.current;
    const current = location.pathname;

    if (prev !== current) {
      contentRef?.current.scrollTo({top: 0, behavior: 'smooth'});
      previousPathRef.current = current;
    }
  }, [location.pathname, contentRef]);

  return (
    <aside className={clsx(styles.sidebar)}>
      <ul className={styles.menu}>
        {CONTENT_NAVIGATION_MENU.map(code => (
          <li key={code}>
            <NavLink
              className={({isActive}) =>
                clsx(styles.link, {[styles.active]: isActive})
              }
              to={`/${code}`}
            >
              {code}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
});

Sidebar.displayName = 'Sidebar';
