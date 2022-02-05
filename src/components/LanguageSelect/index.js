import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSelect.module.sass';

const locales = {
  en: {
    nativeName: 'Eng',
    label: 'Select language'
  },
  ru: {
    nativeName: 'Рус',
    label: 'Выбор языка'
  }
};

const LanguageSelect = ({ className }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={cn(className, styles.languageSelector)}>
      <div className={styles.label}>
        {locales[i18n.language]?.label || locales.en.label}
      </div>

      <select onChange={(element) => i18n.changeLanguage(element.target.value)}
              defaultValue={i18n.language}>
        {Object.keys(locales).map((locale) => (
          <option key={locale} value={locale}>
            {locales[locale].nativeName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelect;
