import styles from './DotDivider.module.css';

const DOT_NUMBERS = 4;

const DotDivider = () => {
  return (
    <div className={styles.dotContainer}>
      {[...Array(DOT_NUMBERS)].map((_, i) => (
        <span key={i} className={`${styles.dot} ${styles.smallDot}`} />
      ))}
    </div>
  );
};

export default DotDivider;
