import { NextSeo } from 'next-seo';
import Page from '@/components/Page';
import AboutSection from '@/components/AboutSection';
import StackSection from '@/components/StackSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';
import Link from '@/components/Link';

const description = `👋 Hello 🦄 I am a Front-end Engineer.
On this site you will find my skills, contacts, as well as my CV`;

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="🦄 Maxim Bureev - Front-end Engineer - mvbureev"
        description={description}
        canonical="https://mvbureev.com"
        openGraph={{
          url: `https://mvbureev.com`,
          title: `🦄 Maxim Bureev - Front-end Engineer - mvbureev`,
          description,
          type: `website`,
          images: [
            {
              url: `http://mvbureev.com/images/avatar.jpg`,
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
      <main>
        <AboutSection />
        <hr />
        <div className="cv">
          <Link
            title="🔗 CV 🔗"
            href="https://bit.ly/3yap0bL?utm_source=mvbureev.com&utm_medium=top-button&utm_campaign=first&utm_content=landing-page&utm_term=notion"
            />
        </div>
        <hr />
        <StackSection />
        <hr />
        <ContactsSection />
        <hr />
        <Footer />
      </main>
    </Page>
  );
}
