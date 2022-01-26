import React from "react";
import TextInput from "../../components/TextInput";
import styles from "./ComingSoon.module.sass";
import cn from "classnames";
import { useTranslation } from 'react-i18next';

const ComingSoon = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <img src="/images/logo.svg" alt="Meta Talent Market" />
      <form name="launch-newsletter" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="launch-newsletter" />
        <p>{t('screens.comingSoon.text')}</p>
        <p>
          <TextInput
            name="email"
            type="email"
            placeholder="Your email"
            required
          />
        </p>
        <button type="submit" className={cn('button', styles.buttonBig)}>
          {t('screens.comingSoon.button')}
        </button>
      </form>
    </div>
  );
};

export default ComingSoon;
