import React, { useState } from "react";
import cn from "classnames";
import { useTranslation } from 'react-i18next';
import styles from "./UploadDetails.module.sass";
import Dropdown from "../../components/Dropdown";
import Icon from "../../components/Icon";
import TextInput from "../../components/TextInput";
import Switch from "../../components/Switch";
import Loader from "../../components/Loader";
import Modal from "../../components/Modal";
import Preview from "./Preview";
import Cards from "./Cards";
import FolowSteps from "./FolowSteps";

const royaltiesOptions = ["10%", "20%", "30%"];

const items = [
  {
    title: "Create collection",
    color: "#4BC9F0",
  },
  {
    title: "Crypto Legend - Professor",
    color: "#45B26B",
  },
  {
    title: "Crypto Legend - Professor",
    color: "#EF466F",
  },
  {
    title: "Legend Photography",
    color: "#9757D7",
  },
];

const Upload = () => {
  const { t, i18n } = useTranslation();
  const [royalties, setRoyalties] = useState(royaltiesOptions[0]);
  const [sale, setSale] = useState(true);
  const [price, setPrice] = useState(false);
  const [locking, setLocking] = useState(false);

  const [visibleModal, setVisibleModal] = useState(false);

  const [visiblePreview, setVisiblePreview] = useState(false);

  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.wrapper}>
            <div className={styles.head}>
              <div className={cn("h2", styles.title)}>
                {t('screens.uploadDetails.title')}
              </div>
              <button
                className={cn("button-stroke button-small", styles.button)}
              >
                {t('screens.uploadDetails.buttonMultiple')}
              </button>
            </div>
            <form className={styles.form} action="">
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.category}>{t('screens.uploadDetails.items.item1.title')}</div>
                  <div className={styles.note}>
                    {t('screens.uploadDetails.items.item1.note')}
                  </div>
                  <div className={styles.file}>
                    <input className={styles.load} type="file" />
                    <div className={styles.icon}>
                      <Icon name="upload-file" size="24" />
                    </div>
                    <div className={styles.format}>
                      {t('screens.uploadDetails.items.item1.format')}
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.category}>{t('screens.uploadDetails.items.item2.title')}</div>
                  <div className={styles.fieldset}>
                    <TextInput
                      className={styles.field}
                      label={t('screens.uploadDetails.items.item2.inputs.item.label')}
                      name="Item"
                      type="text"
                      placeholder={t('screens.uploadDetails.items.item2.inputs.item.placeholder')}
                      required
                    />
                    <TextInput
                      className={styles.field}
                      label={t('screens.uploadDetails.items.item2.inputs.description.label')}
                      name="Description"
                      type="text"
                      placeholder={t('screens.uploadDetails.items.item2.inputs.description.placeholder')}
                      required
                    />
                    <div className={styles.row}>
                      <div className={styles.col}>
                        <div className={styles.field}>
                          <div className={styles.label}>{t('screens.uploadDetails.items.item2.inputs.royalties.label')}</div>
                          <Dropdown
                            className={styles.dropdown}
                            value={royalties}
                            setValue={setRoyalties}
                            options={royaltiesOptions}
                          />
                        </div>
                      </div>
                      <div className={styles.col}>
                        <TextInput
                          className={styles.field}
                          label={t('screens.uploadDetails.items.item2.inputs.size.label')}
                          name="Size"
                          type="text"
                          placeholder={t('screens.uploadDetails.items.item2.inputs.size.placeholder')}
                          required
                        />
                      </div>
                      <div className={styles.col}>
                        <TextInput
                          className={styles.field}
                          label={t('screens.uploadDetails.items.item2.inputs.property.label')}
                          name="Property"
                          type="text"
                          placeholder={t('screens.uploadDetails.items.item2.inputs.property.placeholder')}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.options}>
                <div className={styles.option}>
                  <div className={styles.box}>
                    <div className={styles.category}>{t('screens.uploadDetails.options.option1.title')}</div>
                    <div className={styles.text}>
                      {t('screens.uploadDetails.options.option1.text')}
                    </div>
                  </div>
                  <Switch value={sale} setValue={setSale} />
                </div>
                <div className={styles.option}>
                  <div className={styles.box}>
                    <div className={styles.category}>{t('screens.uploadDetails.options.option2.title')}</div>
                    <div className={styles.text}>
                      {t('screens.uploadDetails.options.option2.text')}
                    </div>
                  </div>
                  <Switch value={price} setValue={setPrice} />
                </div>
                <div className={styles.option}>
                  <div className={styles.box}>
                    <div className={styles.category}>{t('screens.uploadDetails.options.option3.title')}</div>
                    <div className={styles.text}>
                      {t('screens.uploadDetails.options.option3.text')}
                    </div>
                  </div>
                  <Switch value={locking} setValue={setLocking} />
                </div>
                <div className={styles.category}>{t('screens.uploadDetails.options.option4.title')}</div>
                <div className={styles.text}>
                  {t('screens.uploadDetails.options.option4.text')}
                </div>
                <Cards className={styles.cards} items={items} />
              </div>
              <div className={styles.foot}>
                <button
                  className={cn("button-stroke tablet-show", styles.button)}
                  onClick={() => setVisiblePreview(true)}
                  type="button"
                >
                  {t('screens.uploadDetails.footer.buttonPreview')}
                </button>
                <button
                  className={cn("button", styles.button)}
                  onClick={() => setVisibleModal(true)}
                  // type="button" hide after form customization
                  type="button"
                >
                  <span>{t('screens.uploadDetails.footer.buttonCreateItem')}</span>
                  <Icon name="arrow-next" size="10" />
                </button>
                <div className={styles.saving}>
                  <span>{t('screens.uploadDetails.footer.autoSaving')}</span>
                  <Loader className={styles.loader} />
                </div>
              </div>
            </form>
          </div>
          <Preview
            className={cn(styles.preview, { [styles.active]: visiblePreview })}
            onClose={() => setVisiblePreview(false)}
          />
        </div>
      </div>
      <Modal visible={visibleModal} onClose={() => setVisibleModal(false)}>
        <FolowSteps className={styles.steps} />
      </Modal>
    </>
  );
};

export default Upload;
