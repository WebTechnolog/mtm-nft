import React from "react";
import cn from "classnames";
import { useTranslation, Trans } from 'react-i18next';
import styles from "./ImagesCreationHome.module.sass";
import { Link } from "react-router-dom";

const ImagesCreationHome = () => {
  const { t, i18n } = useTranslation();

  const sections = [
    {
      title: t('screens.imageCreationHome.sections.createStyleTransfer.title'),
      subtitle: t('screens.imageCreationHome.sections.createStyleTransfer.subtitle'),
      image: "/images/content/selection-pic-2.jpg",
      url: "/create-style-transfer",
    },
    {
      title: t('screens.imageCreationHome.sections.createTextToImage.title'),
      subtitle: t('screens.imageCreationHome.sections.createTextToImage.subtitle'),
      image: "/images/content/selection-pic-1.jpg",
      url: "/create-text-to-image",
    },
  ];

  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.top}>
            <h1 className={cn("h2", styles.heading)}>
              <Trans i18nKey="screens.imageCreationHome.title" />
            </h1>
            <h4 className={cn("h4", styles.heading)}>
              {t('screens.imageCreationHome.subtitle')}
            </h4>
          </div>
          <div className={styles.list}>
            {sections.map((item, index) => (
              <Link className={styles.item} to={item.url} key={index}>
                <div className={styles.preview}>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.subtitle}>{item.subtitle}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImagesCreationHome;
