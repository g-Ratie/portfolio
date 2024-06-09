import React from 'react';
import styles from './Title.module.css';
import DotDivider from './DotDivider';

type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <DotDivider />
    </div>
  );
};

export default Title;
