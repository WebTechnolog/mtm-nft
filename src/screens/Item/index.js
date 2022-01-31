import React, { useState } from "react";
import cn from "classnames";
import { useTranslation } from 'react-i18next';
import styles from "./Item.module.sass";
import Users from "./Users";
import Control from "./Control";
import Options from "./Options";

const categories = [
  {
    category: "black",
    content: "art",
  },
  {
    category: "purple",
    content: "unlockable",
  },
];

const users = [
  {
    name: "Raquel Will",
    position: "Owner",
    avatar: "/images/content/avatar-2.jpg",
    reward: "/images/content/reward-1.svg",
  },
  {
    name: "Selina Mayert",
    position: "Creator",
    avatar: "/images/content/avatar-1.jpg",
  },
];

const Item = () => {
  const { t, i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const navLinks = [
    t('screens.item.navLinks.info'),
    t('screens.item.navLinks.owners'),
    t('screens.item.navLinks.history'),
    t('screens.item.navLinks.bids'),
  ];

  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.bg}>
            <div className={styles.preview}>
              <div className={styles.categories}>
                {categories.map((x, index) => (
                  <div
                    className={cn(
                      { "status-black": x.category === "black" },
                      { "status-purple": x.category === "purple" },
                      styles.category
                    )}
                    key={index}
                  >
                    {x.content}
                  </div>
                ))}
              </div>
              <img
                srcSet="/images/content/item-pic@2x.jpg 2x"
                src="/images/content/item-pic.jpg"
                alt="Item"
              />
            </div>
            <Options className={styles.options} />
          </div>
          <div className={styles.details}>
            <h1 className={cn("h3", styles.title)}>{t('screens.item.title')}</h1>
            <div className={styles.cost}>
              <div className={cn("status-stroke-green", styles.price)}>
                2.5 MTT
              </div>
              <div className={cn("status-stroke-black", styles.price)}>
                $4,429.87
              </div>
              <div className={styles.counter}>10 {t('screens.item.inStock')}</div>
            </div>
            <div className={styles.info}>
              {t('screens.item.info')}{" "}
              <a
                href="https://mtm-nft.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://mtm-nft.netlify.app
              </a>
            </div>
            <div className={styles.nav}>
              {navLinks.map((x, index) => (
                <button
                  className={cn(
                    { [styles.active]: index === activeIndex },
                    styles.link
                  )}
                  onClick={() => setActiveIndex(index)}
                  key={index}
                >
                  {x}
                </button>
              ))}
            </div>
            <Users className={styles.users} items={users} />
            <Control className={styles.control} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
