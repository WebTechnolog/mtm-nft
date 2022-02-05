import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { useTranslation } from 'react-i18next';
import styles from "./UploadVariants.module.sass";
import Control from "../../components/Control";

const Upload = () => {
  const { t, i18n } = useTranslation();

  const breadcrumbs = [
    {
      title: t('screens.uploadVariants.breadcrumbs.home'),
      url: "/",
    },
    {
      title: t('screens.uploadVariants.breadcrumbs.uploadItem'),
    },
  ];

  const items = [
    {
      url: "/upload-details",
      buttonText: t('screens.uploadVariants.items.createSingle'),
      image: "/images/content/upload-pic-1.jpg",
      image2x: "/images/content/upload-pic-1@2x.jpg",
    },
    {
      url: "/upload-details",
      buttonText: t('screens.uploadVariants.items.createMultiple'),
      image: "/images/content/upload-pic-2.jpg",
      image2x: "/images/content/upload-pic-2@2x.jpg",
    },
  ];

  return (
    <div className={styles.page}>
      <Control className={styles.control} item={breadcrumbs} />
      <div className={cn("section-pt80", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.top}>
            <h1 className={cn("h2", styles.title)}>{t('screens.uploadVariants.title')}</h1>
            <div className={styles.info}>
              {t('screens.uploadVariants.info')}
            </div>
          </div>
          <div className={styles.list}>
            {items.map((x, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.preview}>
                  <img srcSet={`${x.image2x} 2x`} src={x.image} alt="Upload" />
                </div>
                <Link className={cn("button-stroke", styles.button)} to={x.url}>
                  {x.buttonText}
                </Link>
              </div>
            ))}
          </div>
          <div className={styles.note}>
            {t('screens.uploadVariants.note')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
