import React from "react";
import cn from "classnames";
import { useTranslation } from 'react-i18next';
import styles from "./Burn.module.sass";

const Burn = ({ className }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={cn(className, styles.transfer)}>
      <div className={cn("h4", styles.title)}>{t('components.burn.title')}</div>
      <div className={styles.text}>
        {t('components.burn.text')}
      </div>
      <div className={styles.btns}>
        <button className={cn("button-pink", styles.button)}>{t('components.burn.buttonOk')}</button>
        <button className={cn("button-stroke", styles.button)}>{t('components.burn.buttonCancel')}</button>
      </div>
    </div>
  );
};

export default Burn;
