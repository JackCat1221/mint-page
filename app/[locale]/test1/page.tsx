import initTranslations from '../../i18n';

export default async function Test1({ params: { locale } } : any) {
  const { t } = await initTranslations(locale, ['test']);

  return (
    <main>
      <h1>{t('header')}</h1>
    </main>
  );
}