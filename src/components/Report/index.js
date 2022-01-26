import React from "react";
import cn from "classnames";
import { useTranslation } from 'react-i18next';
import styles from "./Report.module.sass";
import TextArea from "../TextArea";

const Report = ({ className }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={cn(className, styles.transfer)}>
      <div className={cn("h4", styles.title)}>{t('components.report.title')}</div>
      <div className={styles.text}>
        {t('components.report.text')}
      </div>
      <TextArea
        className={styles.field}
        label={t('components.report.message.label')}
        name="Message"
        placeholder={t('components.report.message.placeholder')}
        required="required"
      />
      <div className={styles.btns}>
        <button className={cn("button", styles.button)}>{t('components.report.buttonOk')}</button>
        <button className={cn("button-stroke", styles.button)}>{t('components.report.buttonCancel')}</button>
      </div>
    </div>
  );
};

export default Report;
