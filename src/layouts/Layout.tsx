import React from 'react';
import Header from '../component/Header';
import styles from './Layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className={`${styles.main} ${styles.verticalSpacingLarge}`}>{children}</main>
    </>
  );
};

export default Layout;
