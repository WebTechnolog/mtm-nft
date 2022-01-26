import React from "react";
import cn from "classnames";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import styles from "./Description.module.sass";
import Image from "../../../components/Image";

const Description = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={styles.stage}>{t('screens.home.description.subtitle')}</div>
          <h1 className={cn("h1", styles.title)}>
            {t('screens.home.description.title')}
          </h1>
          <div className={styles.text}>
            {t('screens.home.description.text')}
          </div>
          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="/upload-variants">
              {t('screens.home.description.buttonCreateItem')}
            </Link>
            <Link className={cn("button-stroke", styles.button)} to="/search01">
              {t('screens.home.description.buttonDiscoverMore')}
            </Link>
          </div>
        </div>
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/cubes@2x.png 2x"
              srcSetDark="/images/content/cubes-dark@2x.png 2x"
              src="/images/content/cubes.png"
              srcDark="/images/content/cubes-dark.png"
              alt="Cubes"
            />
          </div>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/cube@2x.png 2x"
              srcSetDark="/images/content/cube-dark@2x.png 2x"
              src="/images/content/cube.png"
              srcDark="/images/content/cube-dark.png"
              alt="Cube"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
