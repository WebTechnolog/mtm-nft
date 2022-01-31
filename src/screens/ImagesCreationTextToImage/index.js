import React, { useState, useEffect } from "react";
import cn from "classnames";
import { useTranslation, Trans } from 'react-i18next';
import styles from "./ImagesCreationTextToImage.module.sass";
import Switch from "../../components/Switch";
import Icon from "../../components/Icon";
import TextInput from "../../components/TextInput";
import Loader from "../../components/Loader";

const apiUrl = 'https://api2.mtm.art';

const ImagesCreationTextToImage = () => {
  const { t, i18n } = useTranslation();
  const [isAdvancedEnabled, setIsAdvancedEnabled] = useState(false);
  const [formValues, setFormValues] = useState({
    prompts: '',
    init_image: '',
    im_max_size: 600,
    width: 512,
    height: 512,
    upscale: true,
    upscale_type: 'default',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [needStatusCheck, setNeedStatusCheck] = useState(0);
  const [userId, setUserId] = useState(Date.now());
  const [apiRunResponse, setApiRunResponse] = useState({});
  const [apiStatusResponse, setApiStatusResponse] = useState({});

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value;

    event.persist();

    switch (target.type) {
      case 'checkbox': {
        value = target.checked;
        break;
      }

      case 'file': {
        const reader = new FileReader();

        reader.readAsDataURL(target.files[0]);
        reader.onload = function () {
          value = reader.result.replace('data:image/png;base64,', '');

          setFormValues((formValues) => ({
            ...formValues,
            [name]: value,
          }));
        };

        return;
      }

      default: {
        value = target.value;
      }
    }

    setFormValues((formValues) => ({
      ...formValues,
      [name]: value,
    }));
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  const handleNewImageClick = (event) => {
    setApiStatusResponse({});
  };

  useEffect(() => {
    if (!formSubmitted) {
      return;
    }

    setApiRunResponse({});

    fetch(`${apiUrl}/run/${userId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: JSON.stringify({
        ...{
          max_iterations: 250,
          seed: -1,
        },
        ...formValues,
      }),
    })
      // .then(res => res.json())
      .then(
        (result) => {
          // console.log('RUN', result);
          setApiRunResponse(result);

          if (result.status === 200 || result.status === 201) {
            setNeedStatusCheck(1);
          }
        },
        (error) => {
          // console.log('RUN-ERROR',error);
        }
      )
      .finally(() => {
        setFormSubmitted(false);
      })
  }, [formSubmitted])

  useEffect(() => {
    if (needStatusCheck === 0) {
      return;
    }

    setTimeout(() => {
      fetch(`${apiUrl}/status/${userId}`, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(
          (result) => {
            // console.log('STATUS', result);
            setNeedStatusCheck(
              result.status === 'process' || result.status === 'start upscale' || result.status === 'start process'
                ? needStatusCheck + 1
                : 0
            );
            setApiStatusResponse(result);
          },
          (error) => {
            // console.log('STATUS-ERROR', error);
          }
        )
    }, 500)
  }, [needStatusCheck])

  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          {Object.keys(apiStatusResponse).length === 0 && (
            <>
              <div className={styles.top}>
                <h1 className={cn("h2", styles.heading)}>
                  {t('screens.imagesCreationTextToImage.title')}
                </h1>
                <div className={styles.switchControl}>
                  <Switch value={isAdvancedEnabled} setValue={setIsAdvancedEnabled} />
                  <span>{t('screens.imagesCreationTextToImage.showAdvancedOptions')}</span>
                </div>
              </div>

              <form className={styles.list} onSubmit={handleFormSubmit}>
                <div className={styles.item}>
                  <div className={styles.category}>
                    {t('screens.imagesCreationTextToImage.items.textPrompt.title')}
                  </div>
                  <p className={styles.note}>
                    {t('screens.imagesCreationTextToImage.items.textPrompt.note')}
                  </p>
                  <TextInput
                    className={styles.field}
                    label={t('screens.imagesCreationTextToImage.items.textPrompt.label')}
                    name="prompts"
                    type="text"
                    placeholder={t('screens.imagesCreationTextToImage.items.textPrompt.placeholder')}
                    required
                    value={formValues.prompts}
                    onChange={handleInputChange}
                  />
                </div>

                {isAdvancedEnabled && (
                  <>
                    <div className={styles.item}>
                      <div className={styles.category}>
                        {t('screens.imagesCreationTextToImage.items.advanced.title')}
                      </div>
                      <p className={styles.note}>
                        {t('screens.imagesCreationTextToImage.items.advanced.note')}
                      </p>

                      <div><strong>{t('screens.imagesCreationTextToImage.items.advanced.startImage')}</strong></div>
                      <div className={styles.file} style={{backgroundImage: `url(data:image/png;base64,${formValues.init_image})`}}>
                        <input
                          className={styles.load}
                          name="init_image"
                          type="file"
                          onChange={handleInputChange}
                        />
                        <div className={styles.icon}>
                          <Icon name="upload-file" size="24" />
                        </div>
                        <div className={styles.format}>
                          JPG, PNG, GIF, WEBP
                        </div>
                      </div>
                    </div>

                    <div className={styles.item}>
                      <div className={styles.optionsList}>
                        <div className={styles.optionsItem}>
                          <div className={styles.category}>
                            {t('screens.imagesCreationTextToImage.items.width.title')}
                          </div>
                          <TextInput
                            className={styles.field}
                            name="width"
                            type="number"
                            placeholder={t('screens.imagesCreationTextToImage.items.width.placeholder')}
                            value={formValues.width}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className={styles.optionsItem}>
                          <div className={styles.category}>
                            {t('screens.imagesCreationTextToImage.items.height.title')}
                          </div>
                          <TextInput
                            className={styles.field}
                            name="height"
                            type="number"
                            placeholder={t('screens.imagesCreationTextToImage.items.height.placeholder')}
                            value={formValues.height}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className={styles.item}>
                      <div className={styles.optionsList} style={{alignItems: 'end'}}>
                        <div className={styles.optionsItem}>
                          <div className={styles.category}>
                            {t('screens.imagesCreationTextToImage.items.imageMaxSize.title')}
                          </div>
                          <TextInput
                            className={styles.field}
                            name="im_max_size"
                            type="number"
                            placeholder={t('screens.imagesCreationTextToImage.items.imageMaxSize.placeholder')}
                            value={formValues.im_max_size}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className={styles.optionsItem}>
                          <div className={styles.switchControl}>
                            <Switch
                              name="upscale"
                              value={formValues.upscale}
                              onChange={handleInputChange}
                            />
                            <span>{t('screens.imagesCreationTextToImage.items.upscale.title')}</span>
                          </div>

                          {formValues.upscale && (
                            <select name="upscale_type" value={formValues.upscale_type} onChange={handleInputChange} className={styles.formControlSelect}>
                              <option value="default">{t('screens.imagesCreationTextToImage.items.upscale.options.default')}</option>
                              <option value="art">{t('screens.imagesCreationTextToImage.items.upscale.options.art')}</option>
                              <option value="comics">{t('screens.imagesCreationTextToImage.items.upscale.options.comics')}</option>
                              <option value="anime">{t('screens.imagesCreationTextToImage.items.upscale.options.anime')}</option>
                            </select>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div className={styles.item}>
                  {apiRunResponse.status === 503 && (
                    <p style={{textAlign: 'center'}}>
                      <strong>{t('screens.imagesCreationTextToImage.serverBusyMessage')}</strong>
                    </p>
                  )}

                  <p>
                    <button type="submit" className={cn(`button ${formSubmitted ? 'loading' : ''}`, styles.buttonBig)}>
                      {formSubmitted && <Loader className={styles.loader} color="white" />}
                      {t('screens.imagesCreationTextToImage.submit.button')}
                    </button>
                  </p>
                  <p>{t('screens.imagesCreationTextToImage.submit.terms.text1')} <a href="#">{t('screens.imagesCreationTextToImage.submit.terms.text2')}</a></p>
                </div>
              </form>
            </>
          )}

          {Object.keys(apiStatusResponse).length > 0 && (
            <>
              <div className={styles.top}>
                <h1 className={cn("h2", styles.heading)}>
                  {t('screens.imagesCreationTextToImage.result.title')}
                </h1>

                {apiStatusResponse.status === 'process' && (
                  <div className={cn("h3", styles.heading)}>
                    {t('screens.imagesCreationTextToImage.result.inProgress')} - {apiStatusResponse.img}
                  </div>
                )}

                {(apiStatusResponse.status !== 'process' && apiStatusResponse.status !== 'ready' && apiStatusResponse.status !== 'upscale failed') && (
                  <div className={cn("h3", styles.heading)}>
                    {t('screens.imagesCreationTextToImage.result.finishing')}
                  </div>
                )}

                {apiStatusResponse.status === 'upscale failed' && (
                  <div className={cn("h3", styles.heading)}>
                    <Trans i18nKey="screens.imagesCreationTextToImage.result.failed" />
                  </div>
                )}
              </div>

              {apiStatusResponse.status === 'ready' && (
                <>
                  <p className={styles.imageResult}>
                    <img src={`data:image/png;base64,${apiStatusResponse.img}`} alt={t('screens.imagesCreationTextToImage.result.resultingImage')} />
                  </p>

                  <p>&nbsp;</p>
                </>
              )}

              {(apiStatusResponse.status === 'ready' || apiStatusResponse.status === 'upscale failed') && (
                <>
                  <p>
                    <button type="button" className={cn('button', styles.buttonBig)} onClick={handleNewImageClick}>
                      {t('screens.imagesCreationTextToImage.result.createAnotherOne')}
                    </button>
                  </p>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ImagesCreationTextToImage;
