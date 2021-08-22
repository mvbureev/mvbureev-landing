import Head from 'next/head';
import styles from './Page.module.sass';

interface IProps {
  children: React.ReactNode;
}

const Page = ({ children }: IProps) => (
  <div>
    <Head>
      <link rel="icon" href="/logo.png" />
    </Head>
    <div className={styles.page}>{children}</div>
  </div>
);

export default Page;
