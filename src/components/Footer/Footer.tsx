import styles from './Footer.module.sass';

const Footer = () => (
  <footer className={styles.footer}>
    <code>
      Sources:{' '}
      <a href="https://github.com/mvbureev/mvbureev-landing" target="_blank" rel="noreferrer">
        github.com/mvbureev/mvbureev-landing
      </a>
    </code>
  </footer>
);

export default Footer;
