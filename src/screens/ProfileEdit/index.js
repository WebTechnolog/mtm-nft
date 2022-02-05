import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { useTranslation } from 'react-i18next';
import styles from "./ProfileEdit.module.sass";
import Control from "../../components/Control";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import Icon from "../../components/Icon";

const ProfileEdit = () => {
  const { t, i18n } = useTranslation();

  const breadcrumbs = [
    {
      title: t('screens.profileEdit.breadcrumbs.home'),
      url: "/",
    },
    {
      title: t('screens.profileEdit.breadcrumbs.editProfile'),
    },
  ];

  return (
    <div className={styles.page}>
      <Control className={styles.control} item={breadcrumbs} />
      <div className={cn("section-pt80", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.top}>
            <h1 className={cn("h2", styles.title)}>
              {t('screens.profileEdit.title')}
            </h1>
            <div className={styles.info}>
              {t('screens.profileEdit.info.text1')}{" "}
              <strong>{t('screens.profileEdit.info.text2')}</strong> {t('screens.profileEdit.info.text3')}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.user}>
                <div className={styles.avatar}>
                  <img src="/images/content/avatar-1.jpg" alt="Avatar" />
                </div>
                <div className={styles.details}>
                  <div className={styles.stage}>{t('screens.profileEdit.profilePhoto.title')}</div>
                  <div className={styles.text}>
                    {t('screens.profileEdit.profilePhoto.text')}{" "}
                    <span role="img" aria-label="hooray">
                      🙌
                    </span>
                  </div>
                  <div className={styles.file}>
                    <button
                      className={cn(
                        "button-stroke button-small",
                        styles.button
                      )}
                    >
                      {t('screens.profileEdit.profilePhoto.buttonUpload')}
                    </button>
                    <input className={styles.load} type="file" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.category}>{t('screens.profileEdit.accountInfo.title')}</div>
                  <div className={styles.fieldset}>
                    <TextInput
                      className={styles.field}
                      label={t('screens.profileEdit.accountInfo.inputs.name.label')}
                      name="Name"
                      type="text"
                      placeholder={t('screens.profileEdit.accountInfo.inputs.name.placeholder')}
                      required
                    />
                    <TextInput
                      className={styles.field}
                      label={t('screens.profileEdit.accountInfo.inputs.url.label')}
                      name="Url"
                      type="text"
                      placeholder={t('screens.profileEdit.accountInfo.inputs.url.placeholder')}
                      required
                    />
                    <TextArea
                      className={styles.field}
                      label={t('screens.profileEdit.accountInfo.inputs.bio.label')}
                      name="Bio"
                      placeholder={t('screens.profileEdit.accountInfo.inputs.bio.placeholder')}
                      required="required"
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.category}>{t('screens.profileEdit.social.title')}</div>
                  <div className={styles.fieldset}>
                    <TextInput
                      className={styles.field}
                      label={t('screens.profileEdit.social.inputs.portfolio.label')}
                      name="Portfolio"
                      type="text"
                      placeholder={t('screens.profileEdit.social.inputs.portfolio.placeholder')}
                      required
                    />
                    <div className={styles.box}>
                      <TextInput
                        className={styles.field}
                        label={t('screens.profileEdit.social.inputs.twitter.label')}
                        name="Twitter"
                        type="text"
                        placeholder={t('screens.profileEdit.social.inputs.twitter.placeholder')}
                        required
                      />
                      <button
                        className={cn(
                          "button-stroke button-small",
                          styles.button
                        )}
                      >
                        {t('screens.profileEdit.social.buttonVerify')}
                      </button>
                    </div>
                  </div>
                  <button
                    className={cn("button-stroke button-small", styles.button)}
                  >
                    <Icon name="plus-circle" size="16" />
                    <span>{t('screens.profileEdit.social.addMore')}</span>
                  </button>
                </div>
              </div>
              <div className={styles.note}>
                {t('screens.profileEdit.note')}
              </div>
              <div className={styles.btns}>
                <button className={cn("button", styles.button)}>
                  {t('screens.profileEdit.buttonOk')}
                </button>
                <button className={styles.clear}>
                  <Icon name="circle-close" size="24" />
                  {t('screens.profileEdit.buttonCancel')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
