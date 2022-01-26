import React from "react";
import cn from "classnames";
import { useTranslation } from 'react-i18next';
import styles from "./RemoveSale.module.sass";

const RemoveSale = ({ className }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={cn(className, styles.transfer)}>
      <div className={cn("h4", styles.title)}>{t('components.removeSale.title')}</div>
      <div className={styles.text}>
        {t('components.removeSale.text')}
      </div>
      <div className={styles.btns}>
        <button className={cn("button", styles.button)}>{t('components.removeSale.buttonOk')}</button>
        <button className={cn("button-stroke", styles.button)}>{t('components.removeSale.buttonCancel')}</button>
      </div>
    </div>
  );
};

export default RemoveSale;
