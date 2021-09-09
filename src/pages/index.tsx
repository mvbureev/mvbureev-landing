import { NextSeo } from 'next-seo';
import Page from '@/components/Page';
import AboutSection from '@/components/AboutSection';
import StackSection from '@/components/StackSection';
import ContactsSection from '@/components/ContactsSection';
import Link from '@/components/Link';

const description = `👋 Привет 🦄 Я — Front-end Engineer.
На этом сайте вы найдете навыки, которыми я владею, контакты, а так же мое резюме`;

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="🦄 Maxim Bureev - Front-end Engineer - mvbureev"
        description={description}
        canonical="https://mvbureev.ru"
        openGraph={{
          url: `https://mvbureev.ru`,
          title: `🦄 Maxim Bureev - Front-end Engineer - mvbureev`,
          description,
          type: `website`,
          images: [
            {
              url: `http://mvbureev.ru/images/avatar.jpg`,
              width: 1000,
              height: 1000,
              alt: `mvbureev`,
            },
          ],
          site_name: `mvbureev`,
        }}
        twitter={{
          handle: `@mvbureev`,
          site: `@mvbureev`,
          cardType: `summary_large_image`,
        }}
      />
      <div className="background" />
      <header>
        <Link
          title="CV / Резюме"
          href="https://bit.ly/3yap0bL?utm_source=mvbureev.ru&utm_medium=top-button&utm_campaign=first&utm_content=landing-page&utm_term=notion"
        />
      </header>
      <main>
        <AboutSection />
        <hr />
        <StackSection />
        <hr />
        <ContactsSection />
        <hr />
      </main>
    </Page>
  );
}
