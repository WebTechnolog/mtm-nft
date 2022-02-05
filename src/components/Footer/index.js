import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { useTranslation } from 'react-i18next';
import styles from "./Footer.module.sass";
import Group from "./Group";
import Image from "../Image";
import Form from "../Form";
import Theme from "../Theme";
import LanguageSelect from "../LanguageSelect";

const items = [
  {
    title: "Meta Talent Market.",
    menu: [
      {
        title: "Discover",
        url: "/search01",
      },
      {
        title: "Connect wallet",
        url: "/connect-wallet",
      },
    ],
  },
  {
    title: "Info",
    menu: [
      {
        title: "FAQ",
        url: "/faq",
      },
      {
        title: "Create item",
        url: "/upload-variants",
      },
      {
        title: "Create image",
        url: "/create-image",
      },
    ],
  },
];

const Footers = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <footer className={styles.footer}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Link className={styles.logo} to="/">
              <Image
                className={styles.pic}
                src="/images/logo.svg"
                srcDark="/images/logo.svg"
                alt="Meta Talent Marketplace"
              />
              <span>Meta<br/> Talent<br/> Marketplace</span>
            </Link>
            <div className={styles.info}>The new Meta Talent Marketplace.</div>
            <div className={styles.version}>
              <div className={styles.details}>{t('components.footer.theme')}</div>
              <Theme className="theme-big" />
            </div>
          </div>
          <div className={styles.col}>
            {items.map((x, index) => (
              <Group className={styles.group} item={x} key={index} />
            ))}
          </div>
          <div className={styles.col}>
            <div className={styles.category}>{t('components.footer.newsletter.title')}</div>
            <div className={styles.text}>
              {t('components.footer.newsletter.text')}
            </div>
            <Form
              className={styles.form}
              value={email}
              setValue={setEmail}
              onSubmit={() => handleSubmit()}
              placeholder={t('components.footer.email.placeholder')}
              type="email"
              name="email"
            />
          </div>
        </div>
        <div className={styles.foot}>
          <div className={styles.copyright}>
            Copyright © 2021 Meta Talent Market. {t('components.footer.copyright')}
          </div>
          <div className={styles.note}>
            {t('components.footer.cookies.text')} <a href="/#">{t('components.footer.cookies.button')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
