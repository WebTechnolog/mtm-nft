import React, { useState } from "react";
import cn from "classnames";
import { useTranslation } from 'react-i18next';
import styles from "./Control.module.sass";
import Checkout from "./Checkout";
import Connect from "../../../components/Connect";
import Bid from "../../../components/Bid";
import Accept from "./Accept";
import PutSale from "./PutSale";
import SuccessfullyPurchased from "./SuccessfullyPurchased";
import Modal from "../../../components/Modal";

const Control = ({ className }) => {
  const { t, i18n } = useTranslation();
  const [visibleModalPurchase, setVisibleModalPurchase] = useState(false);
  const [visibleModalBid, setVisibleModalBid] = useState(false);
  const [visibleModalAccept, setVisibleModalAccept] = useState(false);
  const [visibleModalSale, setVisibleModalSale] = useState(false);

  return (
    <>
      <div className={cn(styles.control, className)}>
        <div className={styles.head}>
          <div className={styles.avatar}>
            <img src="/images/content/avatar-4.jpg" alt="Avatar" />
          </div>
          <div className={styles.details}>
            <div className={styles.info}>
              {t('screens.item.control.info')} <span>Kohaku Tora</span>
            </div>
            <div className={styles.cost}>
              <div className={styles.price}>1.46 MTT</div>
              <div className={styles.price}>$2,764.89</div>
            </div>
          </div>
        </div>
        <div className={styles.btns}>
          <button
            className={cn("button", styles.button)}
            onClick={() => setVisibleModalPurchase(true)}
          >
            {t('screens.item.control.buttonPurchase')}
          </button>
          <button
            className={cn("button-stroke", styles.button)}
            onClick={() => setVisibleModalBid(true)}
          >
            {t('screens.item.control.buttonPlaceABid')}
          </button>
        </div>
        <div className={styles.btns}>
          <button className={cn("button-stroke", styles.button)}>
            {t('screens.item.control.buttonViewAll')}
          </button>
          <button
            className={cn("button", styles.button)}
            onClick={() => setVisibleModalAccept(true)}
          >
            {t('screens.item.control.buttonAccept')}
          </button>
        </div>
        <div className={styles.text}>
          {t('screens.item.control.serviceFee')} <span className={styles.percent}>1.5%</span>{" "}
          <span>2.563 MTT</span> <span>$4,540.62</span>
        </div>
        <div className={styles.foot}>
          <button
            className={cn("button", styles.button)}
            onClick={() => setVisibleModalSale(true)}
          >
            {t('screens.item.control.buttonPutOnSale')}
          </button>
        </div>
        <div className={styles.note}>
          {t('screens.item.control.note')}
        </div>
      </div>
      <Modal
        visible={visibleModalPurchase}
        onClose={() => setVisibleModalPurchase(false)}
      >
        <Checkout />
        <SuccessfullyPurchased />
      </Modal>
      <Modal
        visible={visibleModalBid}
        onClose={() => setVisibleModalBid(false)}
      >
        <Connect />
        <Bid />
      </Modal>
      <Modal
        visible={visibleModalAccept}
        onClose={() => setVisibleModalAccept(false)}
      >
        <Accept />
      </Modal>
      <Modal
        visible={visibleModalSale}
        onClose={() => setVisibleModalSale(false)}
      >
        <PutSale />
      </Modal>
    </>
  );
};

export default Control;
