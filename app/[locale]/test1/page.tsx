import initTranslations from '../../i18n';
import ExampleClientComponent from '@/components/ExampleClientComponent';

export default async function Test1({ params: { locale } } : any) {
  const { t } = await initTranslations(locale, ['test']);

  return (
    <main>
      <h1>{t('header')}</h1>
      <ExampleClientComponent />
    </main>
  );
}