import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { useTranslation } from 'react-i18next';
import styles from "./ConnectWallet.module.sass";
import Icon from "../../components/Icon";
import Checkbox from "../../components/Checkbox";

const menu = [
  {
    title: "Coinbase Wallet",
    color: "#9757D7",
  },
  {
    title: "Coinbase Wallet",
    color: "#3772FF",
  },
  {
    title: "MyEtherWallet",
    color: "#45B26B",
  },
  {
    title: "Wallet Connect",
    color: "#EF466F",
  },
];

const Connect = () => {
  const { t, i18n } = useTranslation();
  const [age, setAge] = useState(true);
  const [conditions, setConditions] = useState(false);

  return (
    <div className={cn("section-pt80", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <Link className={styles.back} to="/">
            <Icon name="arrow-prev" size="24" />
            <div className={cn("h2", styles.stage)}>{t('screens.connectWallet.title')}</div>
          </Link>
        </div>
        <div className={styles.body}>
          <div className={styles.menu}>
            {menu.map((x, index) => (
              <div
                className={cn({ [styles.active]: index === 1 }, styles.link)}
                key={index}
              >
                <div
                  className={styles.icon}
                  style={{ backgroundColor: x.color }}
                >
                  <Icon name="wallet" size="24" />
                  <Icon name="check" size="18" fill={x.color} />
                </div>
                <span>{x.title}</span>
                <div className={styles.arrow}>
                  <Icon name="arrow-next" size="14" />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.wrapper}>
            <div className={styles.bg}>
              <img
                srcSet="/images/content/connect-bg@2x.jpg 2x"
                src="/images/content/connect-bg.jpg"
                alt="Connect wallet"
              />
            </div>
            <div className={styles.item}>
              <div className={cn("h3", styles.title)}>{t('screens.connectWallet.scanToConnect')}</div>
              <div className={styles.text}>Powered by MTM.Wallet</div>
              <div className={styles.box}>
                <div className={styles.code}>
                  <img src="/images/content/qr-code.png" alt="Qr-code" />
                </div>
              </div>
              <button className={cn("button-stroke", styles.button)}>
                {t('screens.connectWallet.doNotHaveApp')}
              </button>
            </div>
            <div className={styles.item}>
              <div className={cn("h3", styles.title)}>{t('screens.connectWallet.termsOfService')}</div>
              <div className={styles.text}>
                Please take a few minutes to read and understand{" "}
                <span>Stacks Terms of Service</span>. To continue, you’ll need
                to accept the terms of services by checking the boxes.
              </div>
              <div className={styles.preview}>
                <img
                  srcSet="/images/content/connect-pic@2x.jpg 2x"
                  src="/images/content/connect-pic.jpg"
                  alt={t('screens.connectWallet.title')}
                />
              </div>
              <div className={styles.variants}>
                <Checkbox
                  className={styles.checkbox}
                  value={age}
                  onChange={() => setAge(!age)}
                  content={t('screens.connectWallet.checkboxAge')}
                />
                <Checkbox
                  className={styles.checkbox}
                  value={conditions}
                  onChange={() => setConditions(!conditions)}
                  content={t('screens.connectWallet.checkboxConditions')}
                />
              </div>
              <div className={styles.btns}>
                <button className={cn("button-stroke", styles.button)}>
                  {t('screens.connectWallet.buttonCancel')}
                </button>
                <button className={cn("button", styles.button)}>
                  {t('screens.connectWallet.buttonOk')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
