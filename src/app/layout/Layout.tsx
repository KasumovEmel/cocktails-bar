import {useRef} from 'react';

import {Outlet} from 'react-router-dom';

import {Sidebar} from 'widgets/sidebar/ui/Sidebar';

import styles from './styles.module.scss';

export const Layout = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.container}>
      <Sidebar contentRef={contentRef} />
      <main className={styles.content} ref={contentRef}>
        <Outlet />
      </main>
    </div>
  );
};
