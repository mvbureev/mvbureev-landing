import Card from '@/components/Card';
import styles from './StackSection.module.sass';

const stackCards = [
  {
    icon: `/images/typescript.webp`,
    title: `TypeScript`,
    key: `TypeScript`,
    color: `rgba(11, 47, 90, 0.5)`,
  },
  {
    icon: `/images/svg/stack/ecmascript-javascript.svg`,
    title: `ECMAscript`,
    key: `ECMAscript`,
    color: `rgba(244, 222, 78, 0.5)`,
  },
  {
    icon: `/images/svg/stack/react.svg`,
    title: `React`,
    key: `React`,
    color: `rgba(129, 219, 248, 0.5)`,
  },
  {
    icon: `/images/redux.webp`,
    title: `Redux`,
    key: `Redux`,
    color: `rgba(255, 255, 255, 0.3)`,
  },
  {
    icon: `/images/svg/stack/mobx.svg`,
    title: `MobX`,
    key: `MobX`,
    color: `rgba(221, 113, 54, 0.5)`,
  },
  {
    icon: `/images/svg/stack/nextjs.svg`,
    title: `Next.js`,
    key: `Next.js`,
    color: `rgba(0, 0, 0, 0.3)`,
  },
  {
    icon: `/images/svg/stack/webpack.svg`,
    title: `webpack`,
    key: `webpack`,
    color: `rgba(53, 120, 186, 0.5)`,
  },
  {
    icon: `/images/scss-sass.webp`,
    title: `SCSS/SAAS`,
    key: `SCSS/SAAS`,
    color: `rgba(192, 109, 152, 0.5)`,
  },
  {
    icon: `/images/emotion.webp`,
    title: `Emotion`,
    key: `Emotion`,
    color: `rgba(106, 199, 225, 0.5)`,
    width: 42,
  },
  {
    icon: `/images/styled-components.webp`,
    title: `styled`,
    key: `styled-components`,
    color: `rgba(246, 201, 91, 0.5)`,
  },
];

const StackSection = () => (
  <section className={styles.stackSection}>
    <div className={styles.stackContent}>
      <h2 className={styles.stackTitle}>Навыки</h2>
      <div className={styles.stackGrid}>
        {stackCards.map((cardItem) => (
          <Card {...cardItem} />
        ))}
      </div>
    </div>
  </section>
);

export default StackSection;
