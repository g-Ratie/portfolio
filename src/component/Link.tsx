import React from 'react';
import styles from './Link.module.css';

interface LinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

const Link = ({ href, icon, text }: LinkProps) => {
  return (
    <a className={styles.link} href={href}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>{text}</span>
    </a>
  );
};

export default Link;
