import React from "react";
import cn from "classnames";
import { useTranslation } from 'react-i18next';
import styles from "./Checkout.module.sass";
import Icon from "../../../../components/Icon";
import LoaderCircle from "../../../../components/LoaderCircle";

const Checkout = ({ className }) => {
  const { t, i18n } = useTranslation();
  const items = [
    {
      title: "0.007",
      value: "MTT",
    },
    {
      title: t('screens.item.control.checkout.items.yourBalance'),
      value: "8.498 MTT",
    },
    {
      title: t('screens.item.control.checkout.items.serviceFee'),
      value: "0 MTT",
    },
    {
      title: t('screens.item.control.checkout.items.youWillPay'),
      value: "0.007 MTT",
    },
  ];

  return (
    <div className={cn(className, styles.checkout)}>
      <div className={cn("h4", styles.title)}>{t('screens.item.control.checkout.title')}</div>
      <div className={styles.info}>
        {t('screens.item.control.checkout.text')} <strong>C O I N Z</strong> {t('screens.item.control.checkout.from')}{" "}
        <strong>MTM</strong>
      </div>
      <div className={styles.table}>
        {items.map((x, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.col}>{x.title}</div>
            <div className={styles.col}>{x.value}</div>
          </div>
        ))}
      </div>
      <div className={styles.attention}>
        <div className={styles.preview}>
          <Icon name="info-circle" size="32" />
        </div>
        <div className={styles.details}>
          <div className={styles.subtitle}>{t('screens.item.control.checkout.notVerified')}</div>
          <div className={styles.text}>{t('screens.item.control.checkout.purchaseAtOwnRisk')}</div>
        </div>
      </div>
      <div className={cn("h4", styles.title)}>{t('screens.item.control.checkout.followSteps')}</div>
      <div className={styles.line}>
        <div className={styles.icon}>
          <LoaderCircle className={styles.loader} />
        </div>
        <div className={styles.details}>
          <div className={styles.subtitle}>{t('screens.item.control.checkout.purchasing')}</div>
          <div className={styles.text}>
            {t('screens.item.control.checkout.sendingTransaction')}
          </div>
        </div>
      </div>
      <div className={styles.attention}>
        <div className={styles.preview}>
          <Icon name="info-circle" size="32" />
        </div>
        <div className={styles.details}>
          <div className={styles.subtitle}>{t('screens.item.control.checkout.notVerified')}</div>
          <div className={styles.text}>{t('screens.item.control.checkout.purchaseAtOwnRisk')}</div>
        </div>
        <div className={styles.avatar}>
          <img src="/images/content/avatar-3.jpg" alt="Avatar" />
        </div>
      </div>
      <div className={styles.btns}>
        <button className={cn("button", styles.button)}>
          {t('screens.item.control.checkout.buttonOk')}
        </button>
        <button className={cn("button-stroke", styles.button)}>{t('screens.item.control.checkout.buttonCancel')}</button>
      </div>
    </div>
  );
};

export default Checkout;
