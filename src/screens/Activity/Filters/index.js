import React from "react";
import cn from "classnames";
import { useTranslation } from 'react-i18next';
import styles from "./Filters.module.sass";
import Checkbox from "../../../components/Checkbox";

const Filters = ({
  className,
  filters,
  selectedFilters,
  setSelectedFilters,
}) => {
  const { t, i18n } = useTranslation();
  const handleChange = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((x) => x !== filter));
    } else {
      setSelectedFilters((selectedFilters) => [...selectedFilters, filter]);
    }
  };

  return (
    <div className={cn(styles.filters, className)}>
      <div className={styles.info}>{t('screens.activity.filters.info')}</div>
      <div className={styles.group}>
        {filters.map((x, index) => (
          <Checkbox
            className={styles.checkbox}
            content={x}
            value={selectedFilters.includes(x)}
            onChange={() => handleChange(x)}
            key={index}
          />
        ))}
      </div>
      <div className={styles.btns}>
        <button className={cn("button-stroke button-small", styles.button)}>
          {t('screens.activity.filters.selectAll')}
        </button>
        <button className={cn("button-stroke button-small", styles.button)}>
          {t('screens.activity.filters.deselectAll')}
        </button>
      </div>
    </div>
  );
};

export default Filters;
