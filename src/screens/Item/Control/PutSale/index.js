import React, { useState } from "react";
import cn from "classnames";
import { useTranslation } from 'react-i18next';
import styles from "./PutSale.module.sass";
import Icon from "../../../../components/Icon";
import Switch from "../../../../components/Switch";

const PutSale = ({ className }) => {
  const { t, i18n } = useTranslation();
  const [price, setPrice] = useState(false);
  const items = [
    {
      title: t('screens.item.control.putSale.items.enterYourPrice'),
      value: "MTT",
    },
    {
      title: t('screens.item.control.putSale.items.serviceFee'),
      value: "1.5%",
    },
    {
      title: t('screens.item.control.putSale.items.totalBidAmount'),
      value: "0 MTT",
    },
  ];

  return (
    <div className={cn(className, styles.sale)}>
      <div className={cn("h4", styles.title)}>{t('screens.item.control.putSale.title')}</div>
      <div className={styles.line}>
        <div className={styles.icon}>
          <Icon name="coin" size="24" />
        </div>
        <div className={styles.details}>
          <div className={styles.info}>{t('screens.item.control.putSale.info')}</div>
          <div className={styles.text}>
            {t('screens.item.control.putSale.text')}
          </div>
        </div>
        <Switch className={styles.switch} value={price} setValue={setPrice} />
      </div>
      <div className={styles.table}>
        {items.map((x, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.col}>{x.title}</div>
            <div className={styles.col}>{x.value}</div>
          </div>
        ))}
      </div>
      <div className={styles.btns}>
        <button className={cn("button", styles.button)}>{t('screens.item.control.putSale.buttonOk')}</button>
        <button className={cn("button-stroke", styles.button)}>{t('screens.item.control.putSale.buttonCancel')}</button>
      </div>
    </div>
  );
};

export default PutSale;
