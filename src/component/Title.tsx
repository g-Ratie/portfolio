import DotDivider from './DotDivider';
import styles from './Title.module.css';

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
