import Link from '@/components/Link';
import styles from './ContactsSection.module.sass';

const contactLinks = [
  {
    icon: `/images/svg/social/github.svg`,
    alt: `GitHub`,
    key: `GitHub`,
    color: `#333333`,
    href: `https://github.com/mvbureev`,
  },
  {
    icon: `/images/svg/social/gitlab.svg`,
    alt: `GitLab`,
    key: `GitLab`,
    color: `#D65C38`,
    href: `https://gitlab.com/mvbureev`,
  },
  {
    icon: `/images/svg/social/codewars.svg`,
    alt: `Codewars`,
    key: `Codewars`,
    color: `#AE3A22`,
    href: `https://www.codewars.com/users/mvbureev`,
  },
  {
    icon: `/images/svg/social/telegram.svg`,
    alt: `Telegram`,
    key: `Telegram`,
    color: `#0088cc`,
    href: `https://t.me/mvbureev`,
  },
  {
    icon: `/images/svg/social/linkedin.svg`,
    alt: `LinkedIn`,
    key: `LinkedIn`,
    color: `#0A66C2`,
    href: `https://www.linkedin.com/in/bureev/`,
  },
  {
    icon: `/images/svg/social/twitter.svg`,
    alt: `Twitter`,
    key: `Twitter`,
    color: `#1DA1F2`,
    href: `https://twitter.com/mvbureev`,
  },
  {
    icon: `/images/svg/social/mail.svg`,
    alt: `Mail`,
    key: `Mail`,
    color: `#666666`,
    href: `mailto:mvbureev@gmail.com`,
  },
];

const ContactsSection = () => (
  <section className={styles.contactsSection}>
    <div className={styles.contactsContent}>
      <h2 className={styles.contactsTitle}>Contacts</h2>
      <div className={styles.contactsGrid}>
        {contactLinks.map(({ key, ...buttonItem }) => (
          <Link key={key} {...buttonItem} />
        ))}
      </div>
    </div>
  </section>
);

export default ContactsSection;
