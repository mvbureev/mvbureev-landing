import styles from './Footer.module.sass';

const Footer = () => (
  <footer className={styles.footer}>
    <code>
      Исходники:{' '}
      <a href="https://github.com/mvbureev/landing-page" target="_blank" rel="noreferrer">
        github.com/mvbureev/landing-page
      </a>
    </code>
  </footer>
);

export default Footer;
