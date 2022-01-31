import React from "react";
import cn from "classnames";
import { useTranslation } from 'react-i18next';
import styles from "./Accept.module.sass";

const Accept = ({ className }) => {
  const { t, i18n } = useTranslation();
  const items = [
    {
      title: t('screens.item.control.accept.items.serviceFee'),
      value: "0 MTT",
    },
    {
      title: t('screens.item.control.accept.items.totalBidAmount'),
      value: "1.46 MTT",
    },
  ];

  return (
    <div className={cn(className, styles.accept)}>
      <div className={styles.line}>
        <div className={styles.icon}></div>
        <div className={styles.text}>
          {t('screens.item.control.accept.text')} <strong>C O I N Z</strong> {t('screens.item.control.accept.from')}{" "}
          <strong>MTM</strong>
        </div>
      </div>
      <div className={styles.stage}>1.46 MTT {t('screens.item.control.accept.stage')}</div>
      <div className={styles.table}>
        {items.map((x, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.col}>{x.title}</div>
            <div className={styles.col}>{x.value}</div>
          </div>
        ))}
      </div>
      <div className={styles.btns}>
        <button className={cn("button", styles.button)}>{t('screens.item.control.accept.buttonOk')}</button>
        <button className={cn("button-stroke", styles.button)}>{t('screens.item.control.accept.buttonCancel')}</button>
      </div>
    </div>
  );
};

export default Accept;
