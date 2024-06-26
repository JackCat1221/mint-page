import initTranslations from '../../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import ExampleClientComponent from '@/components/ExampleClientComponent';
import LanguageChanger from '@/components/LanguageChanger';
const i18nNamespaces = ['test'];

export default async function Home({ params: { locale } }: any) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main>
        <h1>{t('header')}</h1>
      </main>
      <ExampleClientComponent />
      <LanguageChanger />
    </TranslationsProvider>
  );
}