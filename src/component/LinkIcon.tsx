import React from 'react';
import styles from './LinkIcon.module.css';

type LinkIconProps = {
  icon: React.ReactNode;
  href: string;
};

export const LinkIcon = ({ icon, href }: LinkIconProps) => {
  return (
    <a className={styles.link} href={href}>
      <span className={styles.icon}>{icon}</span>
    </a>
  );
};
