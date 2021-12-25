import styles from './AboutSection.module.sass';

const AboutSection = () => (
  <section className={styles.aboutSection}>
    <img className={styles.aboutAvatar} src="images/avatar-min.webp" alt="mvbureev.ru" />
    <div className={styles.aboutContent}>
      <h1 className={styles.aboutName}>Максим Буреев</h1>
      <h2 className={styles.aboutPosition}>🦄 Front-end Engineer 🦄</h2>
      <p className={styles.aboutCaption}>🌎 Нахожусь в Самаре 🧑‍💻 Работаю удаленно</p>
    </div>
  </section>
);

export default AboutSection;
