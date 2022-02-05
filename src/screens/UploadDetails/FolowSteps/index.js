import React from "react";
import cn from "classnames";
import { useTranslation } from 'react-i18next';
import styles from "./FolowSteps.module.sass";
import Icon from "../../../components/Icon";
import Loader from "../../../components/Loader";
import LoaderCircle from "../../../components/LoaderCircle";

const FolowSteps = ({ className }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={cn(className, styles.steps)}>
      <div className={cn("h4", styles.title)}>
        {t('screens.uploadDetails.folowSteps.title')}
      </div>
      <div className={styles.list}>
        <div className={cn(styles.item, styles.done)}>
          <div className={styles.head}>
            <div className={styles.icon}>
              <Icon name="upload-file" size="24" />
            </div>
            <div className={styles.details}>
              <div className={styles.info}>{t('screens.uploadDetails.folowSteps.items.item1.details.info')}</div>
              <div className={styles.text}>{t('screens.uploadDetails.folowSteps.items.item1.details.text')}</div>
            </div>
          </div>
          <button className={cn("button done", styles.button)}>
            {t('screens.uploadDetails.folowSteps.items.item1.button')}
          </button>
        </div>
        <div className={styles.item}>
          <div className={styles.head}>
            <div className={styles.icon}>
              <Icon name="pencil" size="24" />
            </div>
            <div className={styles.details}>
              <div className={styles.info}>{t('screens.uploadDetails.folowSteps.items.item2.details.info')}</div>
              <div className={styles.text}>{t('screens.uploadDetails.folowSteps.items.item2.details.text')}</div>
            </div>
          </div>
          <button className={cn("button disabled", styles.button)}>
            {t('screens.uploadDetails.folowSteps.items.item2.button')}
          </button>
        </div>
        <div className={styles.item}>
          <div className={styles.head}>
            <div className={styles.icon}>
              <LoaderCircle className={styles.loader} />
            </div>
            <div className={styles.details}>
              <div className={styles.info}>{t('screens.uploadDetails.folowSteps.items.item3.details.info')}</div>
              <div className={styles.text}>{t('screens.uploadDetails.folowSteps.items.item3.details.text')}</div>
            </div>
          </div>
          <button className={cn("button loading", styles.button)}>
            <Loader className={styles.loader} color="white" />
          </button>
        </div>
        <div className={cn(styles.item, styles.error)}>
          <div className={styles.head}>
            <div className={styles.icon}>
              <Icon name="pencil" size="24" />
            </div>
            <div className={styles.details}>
              <div className={styles.info}>{t('screens.uploadDetails.folowSteps.items.item4.details.info')}</div>
              <div className={styles.text}>{t('screens.uploadDetails.folowSteps.items.item4.details.text')}</div>
            </div>
          </div>
          <button className={cn("button error", styles.button)}>
            {t('screens.uploadDetails.folowSteps.items.item4.button')}
          </button>
        </div>
        <div className={styles.item}>
          <div className={styles.head}>
            <div className={styles.icon}>
              <Icon name="bag" size="24" />
            </div>
            <div className={styles.details}>
              <div className={styles.info}>{t('screens.uploadDetails.folowSteps.items.item5.details.info')}</div>
              <div className={styles.text}>{t('screens.uploadDetails.folowSteps.items.item5.details.text')}</div>
            </div>
          </div>
          <button className={cn("button", styles.button)}>
            {t('screens.uploadDetails.folowSteps.items.item5.button')}
          </button>
        </div>
      </div>
      <div className={styles.note}>
        {t('screens.uploadDetails.folowSteps.errorNote.text1')}{" "}
        <a href="/#" target="_blank" rel="noopener noreferrer">
          {t('screens.uploadDetails.folowSteps.errorNote.text2')}
        </a>
      </div>
    </div>
  );
};

export default FolowSteps;
