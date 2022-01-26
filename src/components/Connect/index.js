import React from "react";
import cn from "classnames";
import { useTranslation } from 'react-i18next';
import styles from "./Connect.module.sass";
import Icon from "../Icon";

const Connect = ({ className }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={cn(className, styles.connect)}>
      <div className={styles.icon}>
        <Icon name="wallet" size="24" />
      </div>
      <div className={styles.info}>
        {t('components.connect.info')}
      </div>
      <div className={styles.btns}>
        <button className={cn("button", styles.button)}>{t('components.connect.buttonOk')}</button>
        <button className={cn("button-stroke", styles.button)}>{t('components.connect.buttonCancel')}</button>
      </div>
    </div>
  );
};

export default Connect;
