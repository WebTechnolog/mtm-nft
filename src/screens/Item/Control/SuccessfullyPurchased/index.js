import React from "react";
import cn from "classnames";
import { useTranslation } from 'react-i18next';
import styles from "./SuccessfullyPurchased.module.sass";
import Icon from "../../../../components/Icon";

const socials = [
  {
    title: "facebook",
    url: "https://www.facebook.com/metatalentmarketplace/",
  },
  {
    title: "twitter",
    url: "https://twitter.com/metatalentmarketplace",
  },
  {
    title: "instagram",
    url: "https://www.instagram.com/metatalentmarketplace/",
  },
  {
    title: "pinterest",
    url: "https://www.pinterest.com/metatalentmarketplace/",
  },
];

const SuccessfullyPurchased = ({ className }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={cn(className, styles.wrap)}>
      <div className={cn("h2", styles.title)}>
        {t('screens.item.control.successfullyPurchased.title')}{" "}
        <span role="img" aria-label="firework">
          🎉
        </span>
      </div>
      <div className={styles.info}>
        {t('screens.item.control.successfullyPurchased.info')} <span>C O I N Z</span> {t('screens.item.control.successfullyPurchased.from')} MTM
      </div>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.col}>{t('screens.item.control.successfullyPurchased.status')}</div>
          <div className={styles.col}>{t('screens.item.control.successfullyPurchased.transactionID')}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>{t('screens.item.control.successfullyPurchased.processing')}</div>
          <div className={styles.col}>0msx836930...87r398</div>
        </div>
      </div>
      <div className={styles.stage}>{t('screens.item.control.successfullyPurchased.timeToShowOff')}</div>
      <div className={styles.socials}>
        {socials.map((x, index) => (
          <a
            className={styles.social}
            href={x.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <Icon name={x.title} size="24" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SuccessfullyPurchased;
