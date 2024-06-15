import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
  sections: { title: string; text: string }[];
}
const Section: React.FC<SectionProps> = ({ sections }) => {
  return (
    <div className={styles.container}>
      {sections.map(({ title, text }, index) => (
        <section key={index} className={styles.section}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
        </section>
      ))}
    </div>
  );
};

export default Section;
