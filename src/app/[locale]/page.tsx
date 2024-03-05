import { useTranslations } from 'next-intl';

import LocaleSwitcher from '@/components/LocaleSwitcher';

export default function Index() {
  const t = useTranslations('Index');
  return (
    <div>
      <LocaleSwitcher />

      <h1>{t('title')}</h1>
    </div>
  );
}
