import React from 'react';
import styles from './Header.module.css';
import { LinkIcon } from './LinkIcon';
import { FaFileCode, FaHome, FaUser } from 'react-icons/fa';
import Link from './Link';

const Header = () => {
  return (
    <div className={styles.container}>
      <LinkIcon icon={<FaHome />} href="/" />
      <div className={styles.iconLinkContainer} data-pagefind-ignore="index">
        <Link href="/about" icon={<FaUser />} text="About" />
        <Link href="/works" icon={<FaFileCode />} text="Works" />
      </div>
    </div>
  );
};

export default Header;
