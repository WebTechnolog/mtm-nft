import React from "react";
import cn from "classnames";
import Fancybox from "../../libs/fancybox.js";
import styles from "./Antiques.module.sass";

const images = [
  {
    image: "/images/content/antiques/1.jpg",
    thumbnail: "/images/content/antiques/thumbnails/1.jpg",
  },
  {
    image: "/images/content/antiques/2.jpg",
    thumbnail: "/images/content/antiques/thumbnails/2.jpg",
  },
  {
    image: "/images/content/antiques/3.jpg",
    thumbnail: "/images/content/antiques/thumbnails/3.jpg",
  },
  {
    image: "/images/content/antiques/4.jpg",
    thumbnail: "/images/content/antiques/thumbnails/4.jpg",
  },
  {
    image: "/images/content/antiques/5.jpg",
    thumbnail: "/images/content/antiques/thumbnails/5.jpg",
  },
  {
    image: "/images/content/antiques/6.jpg",
    thumbnail: "/images/content/antiques/thumbnails/6.jpg",
  },
  {
    image: "/images/content/antiques/7.jpg",
    thumbnail: "/images/content/antiques/thumbnails/7.jpg",
  },
  {
    image: "/images/content/antiques/8.jpg",
    thumbnail: "/images/content/antiques/thumbnails/8.jpg",
  },
  {
    image: "/images/content/antiques/9.jpg",
    thumbnail: "/images/content/antiques/thumbnails/9.jpg",
  },
];

const Antiques = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 100000,
        settings: "unslick",
      },
    ],
  };

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <h1 className={cn("h2", styles.heading)}>
            Antiques
          </h1>
        </div>

        <div className={styles.list}>
          <div className={styles.slider}>
            {images.map((item, index) => (
              <a className={styles.card} key={index} data-fancybox="gallery" href={item.image}>
                <div className={styles.cardImage}>
                  <img src={item.thumbnail} alt='Antique' />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Antiques;
