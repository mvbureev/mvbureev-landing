import styles from './AboutSection.module.sass';

const AboutSection = () => (
  <section className={styles.aboutSection}>
    <img className={styles.aboutAvatar} src="images/avatar-small.png" alt="Avatar mvbureev" width={175} height={175} />
    <div className={styles.aboutContent}>
      <h1 className={styles.aboutName}>Максим Буреев</h1>
      <h2 className={styles.aboutPosition}>🦄 Front-end Engineer 🦄</h2>
      <p className={styles.aboutCaption}>🌎 Нахожусь в Самаре 🧑‍💻 Работаю удаленно</p>
    </div>
  </section>
);

export default AboutSection;
