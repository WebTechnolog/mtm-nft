import React, { useState } from "react";
import cn from "classnames";
import { useTranslation } from 'react-i18next';
import styles from "./ImagesCreationStyleTransfer.module.sass";
import Switch from "../../components/Switch";
import Icon from "../../components/Icon";
import { getTrackBackground, Range } from "react-range";

const ImagesCreationStyleTransfer = () => {
  const { t, i18n } = useTranslation();
  const [isAdvancedEnabled, setIsAdvancedEnabled] = useState(false);
  const [isMultipleInputs, setIsMultipleInputs] = useState(false);
  const [isVideoChosen, setIsVideoChosen] = useState(false);
  const [values, setValues] = useState([5]);

  const STEP = 0.1;
  const MIN = 0.01;
  const MAX = 10;

  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.top}>
            <h1 className={cn("h2", styles.heading)}>
              {t('screens.imageCreationStyleTransfer.title')}
            </h1>
            <div className={styles.switchControl}>
              <Switch value={isAdvancedEnabled} setValue={setIsAdvancedEnabled} />
              <span>{t('screens.imageCreationStyleTransfer.showAdvancedOptions')}</span>
            </div>
          </div>

          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.category}>
                {t('screens.imageCreationStyleTransfer.items.inputImage.title')}
              </div>
              <div className={styles.itemHeader}>
                <div className={styles.note}>
                  {t('screens.imageCreationStyleTransfer.items.inputImage.note')}
                </div>

                {isAdvancedEnabled && (
                  <div className={styles.switchControl}>
                    <Switch value={isMultipleInputs} setValue={setIsMultipleInputs} />
                    <span>{t('screens.imageCreationStyleTransfer.items.inputImage.multiple')}</span>
                  </div>
                )}
              </div>
              <div className={styles.file}>
                <input className={styles.load} type="file" />
                <div className={styles.icon}>
                  <Icon name="upload-file" size="24" />
                </div>
                <div className={styles.format}>
                  JPG, PNG, GIF, WEBP
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.category}>
                {t('screens.imageCreationStyleTransfer.items.styleImage.title')}
              </div>
              <div className={styles.itemHeader}>
                <div className={styles.note}>
                  {t('screens.imageCreationStyleTransfer.items.styleImage.note')}
                </div>

                {isAdvancedEnabled && (
                  <div className={styles.switchControl}>
                    <Switch value={isMultipleInputs} setValue={setIsMultipleInputs} />
                    <span>{t('screens.imageCreationStyleTransfer.items.styleImage.multiple')}</span>
                  </div>
                )}
              </div>
              <div className={styles.file}>
                <input className={styles.load} type="file" />
                <div className={styles.icon}>
                  <Icon name="upload-file" size="24" />
                </div>
                <div className={styles.format}>
                  JPG, PNG, GIF, WEBP
                </div>
              </div>
            </div>

            {isAdvancedEnabled && (
              <>
                <div className={styles.item}>
                  <div className={styles.category}>
                    {t('screens.imageCreationStyleTransfer.items.blendWithAnotherStyle.title')}
                  </div>
                  <p className={styles.note}>
                    {t('screens.imageCreationStyleTransfer.items.blendWithAnotherStyle.note')}
                  </p>
                  <p>
                    <button className={cn("button")}>
                      {t('screens.imageCreationStyleTransfer.items.blendWithAnotherStyle.button')}
                    </button>
                  </p>
                </div>

                <div className={styles.item}>
                  <div className={styles.category}>
                    {t('screens.imageCreationStyleTransfer.items.creationSettings.title')}
                  </div>
                  <p className={styles.note}>
                    {t('screens.imageCreationStyleTransfer.items.creationSettings.note')}
                  </p>
                  <div className={styles.optionsList}>
                    <div className={styles.optionsItem}>
                      <div><strong>{t('screens.imageCreationStyleTransfer.items.creationSettings.options.color.title')}</strong></div>
                      <div className={styles.switchControl}>
                        <Switch value={isVideoChosen} setValue={setIsVideoChosen} />
                        <span>{t('screens.imageCreationStyleTransfer.items.creationSettings.options.color.note')}</span>
                      </div>
                    </div>

                    <div className={styles.optionsItem}>
                      <div><strong>{t('screens.imageCreationStyleTransfer.items.creationSettings.options.sharpen.title')}</strong></div>
                      <div className={styles.switchControl}>
                        <Switch value={isVideoChosen} setValue={setIsVideoChosen} />
                        <span>{t('screens.imageCreationStyleTransfer.items.creationSettings.options.sharpen.note')}</span>
                      </div>
                    </div>

                    <div className={styles.optionsItem}>
                      <div><strong>{t('screens.imageCreationStyleTransfer.items.creationSettings.options.contentWeight.title')}</strong></div>
                      <Range
                        values={values}
                        step={STEP}
                        min={MIN}
                        max={MAX}
                        onChange={(values) => setValues(values)}
                        renderTrack={({ props, children }) => (
                          <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                              ...props.style,
                              height: "36px",
                              display: "flex",
                              width: "100%",
                            }}
                          >
                            <div
                              ref={props.ref}
                              style={{
                                height: "8px",
                                width: "100%",
                                borderRadius: "4px",
                                background: getTrackBackground({
                                  values,
                                  colors: ["#3772FF", "#E6E8EC"],
                                  min: MIN,
                                  max: MAX,
                                }),
                                alignSelf: "center",
                              }}
                            >
                              {children}
                            </div>
                          </div>
                        )}
                        renderThumb={({ props, isDragged }) => (
                          <div
                            {...props}
                            style={{
                              ...props.style,
                              height: "24px",
                              width: "24px",
                              borderRadius: "50%",
                              backgroundColor: "#3772FF",
                              border: "4px solid #FCFCFD",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: "-33px",
                                color: "#fff",
                                fontWeight: "600",
                                fontSize: "14px",
                                lineHeight: "18px",
                                fontFamily: "Poppins",
                                padding: "4px 8px",
                                borderRadius: "8px",
                                backgroundColor: "#141416",
                              }}
                            >
                              {values[0].toFixed(1)}
                            </div>
                          </div>
                        )}
                      />
                      <p>{t('screens.imageCreationStyleTransfer.items.creationSettings.options.contentWeight.note')}</p>
                    </div>

                    <div className={styles.optionsItem}>
                      <div><strong>{t('screens.imageCreationStyleTransfer.items.creationSettings.options.contentWeight.title')}</strong></div>
                      <Range
                        values={values}
                        step={STEP}
                        min={MIN}
                        max={MAX}
                        onChange={(values) => setValues(values)}
                        renderTrack={({ props, children }) => (
                          <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                              ...props.style,
                              height: "36px",
                              display: "flex",
                              width: "100%",
                            }}
                          >
                            <div
                              ref={props.ref}
                              style={{
                                height: "8px",
                                width: "100%",
                                borderRadius: "4px",
                                background: getTrackBackground({
                                  values,
                                  colors: ["#3772FF", "#E6E8EC"],
                                  min: MIN,
                                  max: MAX,
                                }),
                                alignSelf: "center",
                              }}
                            >
                              {children}
                            </div>
                          </div>
                        )}
                        renderThumb={({ props, isDragged }) => (
                          <div
                            {...props}
                            style={{
                              ...props.style,
                              height: "24px",
                              width: "24px",
                              borderRadius: "50%",
                              backgroundColor: "#3772FF",
                              border: "4px solid #FCFCFD",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: "-33px",
                                color: "#fff",
                                fontWeight: "600",
                                fontSize: "14px",
                                lineHeight: "18px",
                                fontFamily: "Poppins",
                                padding: "4px 8px",
                                borderRadius: "8px",
                                backgroundColor: "#141416",
                              }}
                            >
                              {values[0].toFixed(1)}
                            </div>
                          </div>
                        )}
                      />
                      <p>{t('screens.imageCreationStyleTransfer.items.creationSettings.options.contentWeight.note')}</p>
                    </div>

                    <div className={styles.optionsItem}>
                      <div><strong>{t('screens.imageCreationStyleTransfer.items.creationSettings.options.contentWeight.title')}</strong></div>
                      <Range
                        values={values}
                        step={STEP}
                        min={MIN}
                        max={MAX}
                        onChange={(values) => setValues(values)}
                        renderTrack={({ props, children }) => (
                          <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                              ...props.style,
                              height: "36px",
                              display: "flex",
                              width: "100%",
                            }}
                          >
                            <div
                              ref={props.ref}
                              style={{
                                height: "8px",
                                width: "100%",
                                borderRadius: "4px",
                                background: getTrackBackground({
                                  values,
                                  colors: ["#3772FF", "#E6E8EC"],
                                  min: MIN,
                                  max: MAX,
                                }),
                                alignSelf: "center",
                              }}
                            >
                              {children}
                            </div>
                          </div>
                        )}
                        renderThumb={({ props, isDragged }) => (
                          <div
                            {...props}
                            style={{
                              ...props.style,
                              height: "24px",
                              width: "24px",
                              borderRadius: "50%",
                              backgroundColor: "#3772FF",
                              border: "4px solid #FCFCFD",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: "-33px",
                                color: "#fff",
                                fontWeight: "600",
                                fontSize: "14px",
                                lineHeight: "18px",
                                fontFamily: "Poppins",
                                padding: "4px 8px",
                                borderRadius: "8px",
                                backgroundColor: "#141416",
                              }}
                            >
                              {values[0].toFixed(1)}
                            </div>
                          </div>
                        )}
                      />
                      <p>{t('screens.imageCreationStyleTransfer.items.creationSettings.options.contentWeight.note')}</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className={styles.item}>
              <div className={styles.category}>{t('screens.imageCreationStyleTransfer.items.video.title')}</div>
              <p className={styles.note}>
                {t('screens.imageCreationStyleTransfer.items.video.note')}
              </p>
              <div className={styles.switchControl}>
                <Switch value={isVideoChosen} setValue={setIsVideoChosen} />
                <span>{t('screens.imageCreationStyleTransfer.items.video.switch')}</span>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.category}>{t('screens.imageCreationStyleTransfer.items.resolution.title')}</div>
              <p className={styles.note}>
                {t('screens.imageCreationStyleTransfer.items.resolution.note')}
              </p>
            </div>

            <div className={styles.item}>
              <p>
                <button className={cn("button", styles.buttonBig)}>
                  {t('screens.imageCreationStyleTransfer.items.submit.button')}
                </button>
              </p>
              <p>{t('screens.imageCreationStyleTransfer.items.submit.terms.text1')} <a href="#">{t('screens.imageCreationStyleTransfer.items.submit.terms.text2')}</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImagesCreationStyleTransfer;
