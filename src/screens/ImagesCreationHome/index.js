import React from "react";
import cn from "classnames";
import styles from "./ImagesCreationHome.module.sass";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Style Transfer",
    subtitle: "Turn your photo into a masterpiece",
    image: "/images/content/selection-pic-2.jpg",
    url: "/create-style-transfer",
  },
  {
    title: "Text to Image",
    subtitle: "Create art from nothing but a text prompt",
    image: "/images/content/selection-pic-1.jpg",
    url: "/create-text-to-image",
  },
];

const ImagesCreationHome = () => {
  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.top}>
            <h1 className={cn("h2", styles.heading)}>
              Choose a creation method
            </h1>
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
