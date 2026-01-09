import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Benefits } from '@/components/Benefits';
import { Services } from '@/components/Services';
import { Cases } from '@/components/Cases';
import { Process } from '@/components/Process';
import { Pricing } from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AutoFlow — Автоматизация бизнес-процессов и интеграций</title>
        <meta
          name="description"
          content="Автоматизация продаж, склада, поддержки и документооборота. Интеграции сервисов, Telegram-боты, парсинг данных. Экономьте время и деньги с продуманной автоматизацией."
        />
        <meta
          name="keywords"
          content="автоматизация бизнеса, no-code, интеграции, telegram бот, интеграция API, автоматизация процессов"
        />
        <meta
          property="og:title"
          content="AutoFlow — Автоматизация бизнес-процессов и интеграций"
        />
        <meta
          property="og:description"
          content="Автоматизация продаж, склада, поддержки и документооборота. Интеграции сервисов, Telegram-боты, парсинг данных. Экономьте время и деньги с продуманной автоматизацией."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <link rel="canonical" href="https://task-line.ru" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Benefits />
          <Services />
          <Cases />
          <Process />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

