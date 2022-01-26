import React from "react";
import cn from "classnames";
import { useTranslation } from 'react-i18next';
import styles from "./Transfer.module.sass";

const Transfer = ({ className }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={cn(className, styles.transfer)}>
      <div className={cn("h4", styles.title)}>{t('components.transfer.title')}</div>
      <div className={styles.text}>
        {t('components.transfer.text')}
      </div>
      <div className={styles.info}>{t('components.transfer.info')}</div>
      <div className={styles.field}>
        <input
          className={styles.input}
          type="text"
          name="address"
          placeholder={t('components.transfer.address.placeholder')}
        />
      </div>
      <div className={styles.btns}>
        <button className={cn("button", styles.button)}>{t('components.transfer.buttonOk')}</button>
        <button className={cn("button-stroke", styles.button)}>{t('components.transfer.buttonCancel')}</button>
      </div>
    </div>
  );
};

export default Transfer;
