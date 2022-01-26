import React, { useState } from "react";
import cn from "classnames";
import { useTranslation } from 'react-i18next';
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./Actions.module.sass";
import Transfer from "../Transfer";
import RemoveSale from "../RemoveSale";
import Burn from "../Burn";
import Report from "../Report";
import Icon from "../Icon";
import Modal from "../../components/Modal";

const Actions = ({ className }) => {
  const { t, i18n } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [visibleModalTransfer, setVisibleModalTransfer] = useState(false);
  const [visibleModalRemoveSale, setVisibleModalRemoveSale] = useState(false);
  const [visibleModalBurn, setVisibleModalBurn] = useState(false);
  const [visibleModalReport, setVisibleModalReport] = useState(false);

  const items = [
    {
      title: t('components.actions.changePrice'),
      icon: "coin",
      action: () => console.log("coin"),
    },
    {
      title: t('components.actions.transferToken'),
      icon: "arrow-right-square",
      action: () => setVisibleModalTransfer(true),
    },
    {
      title: t('components.actions.removeFromSale'),
      icon: "close-circle",
      action: () => setVisibleModalRemoveSale(true),
    },
    {
      title: t('components.actions.burnToken'),
      icon: "close-circle",
      action: () => setVisibleModalBurn(true),
    },
    {
      title: t('components.actions.report'),
      icon: "info-circle",
      action: () => setVisibleModalReport(true),
    },
  ];

  return (
    <>
      <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
        <div
          className={cn(styles.actions, className, {
            [styles.active]: visible,
          })}
        >
          <button
            className={cn("button-circle-stroke", styles.button)}
            onClick={() => setVisible(!visible)}
          >
            <Icon name="more" size="24" />
          </button>
          <div className={styles.body}>
            {items.map((x, index) => (
              <div className={styles.item} key={index} onClick={x.action}>
                <Icon name={x.icon} size="20" />
                <span>{x.title}</span>
              </div>
            ))}
          </div>
        </div>
      </OutsideClickHandler>
      <Modal
        visible={visibleModalTransfer}
        onClose={() => setVisibleModalTransfer(false)}
      >
        <Transfer />
      </Modal>
      <Modal
        visible={visibleModalRemoveSale}
        onClose={() => setVisibleModalRemoveSale(false)}
      >
        <RemoveSale />
      </Modal>
      <Modal
        visible={visibleModalBurn}
        onClose={() => setVisibleModalBurn(false)}
      >
        <Burn />
      </Modal>
      <Modal
        visible={visibleModalReport}
        onClose={() => setVisibleModalReport(false)}
      >
        <Report />
      </Modal>
    </>
  );
};

export default Actions;
