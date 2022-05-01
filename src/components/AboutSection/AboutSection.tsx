import styles from './AboutSection.module.sass';

const AboutSection = () => (
  <section className={styles.aboutSection}>
    <img className={styles.aboutAvatar} src="images/avatar-min.webp" alt="mvbureev.com" />
    <div className={styles.aboutContent}>
      <h1 className={styles.aboutName}>Maxim Bureev</h1>
      <h2 className={styles.aboutPosition}>Front-end Engineer</h2>
      <p className={styles.aboutCaption}>🌎 Looking for a job in <b>Cyprus</b> with relocation 🌎</p>
    </div>
  </section>
);

export default AboutSection;
