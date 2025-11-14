import { FaFileCode, FaGithub, FaTwitter, FaUser } from 'react-icons/fa';
import DotDivider from './DotDivider';
import Link from './Link';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img src="https://github.com/g-ratie.png" alt="Profile" className={styles.profileImage} />
        <DotDivider />
        <h3 className={styles.heading}>I&apos;m ratie!</h3>
        <span className={styles.description}>つくったもの・やったこととか</span>
        <div className={styles.social}>
          <a href="https://twitter.com/ratie_dev" className={styles.socialLink}>
            <FaTwitter size={24} />
          </a>
          <a href="https://github.com/g-ratie" className={styles.socialLink}>
            <FaGithub size={24} />
          </a>
        </div>
        <div className={styles.buttons}>
          <Link href="/about" icon={<FaUser />} text="About" />
          <Link href="/works" icon={<FaFileCode />} text="Works" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
