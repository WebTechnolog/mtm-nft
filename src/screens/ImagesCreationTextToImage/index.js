import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./ImagesCreationTextToImage.module.sass";
import Switch from "../../components/Switch";
import Icon from "../../components/Icon";
import TextInput from "../../components/TextInput";
import Loader from "../../components/Loader";

const apiUrl = 'https://api.mtm.art';

const ImagesCreationTextToImage = () => {
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
          max_iterations: 50,
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
                  Create Something Amazing
                </h1>
                <div className={styles.switchControl}>
                  <Switch value={isAdvancedEnabled} setValue={setIsAdvancedEnabled} />
                  <span>Show advanced options</span>
                </div>
              </div>

              <form className={styles.list} onSubmit={handleFormSubmit}>
                <div className={styles.item}>
                  <div className={styles.category}>Text Prompt</div>
                  <p className={styles.note}>
                    Write a prompt for the AI to work from
                  </p>
                  <TextInput
                    className={styles.field}
                    label="Your text prompt"
                    name="prompts"
                    type="text"
                    placeholder="e. g. Crazy fox jumps over a lazy dog"
                    required
                    value={formValues.prompts}
                    onChange={handleInputChange}
                  />
                </div>

                {isAdvancedEnabled && (
                  <>
                    <div className={styles.item}>
                      <div className={styles.category}>Advanced</div>
                      <p className={styles.note}>
                        Optional settings you might want to tweak
                      </p>

                      <div><strong>Start Image</strong></div>
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
                          <div className={styles.category}>Width</div>
                          <TextInput
                            className={styles.field}
                            name="width"
                            type="number"
                            placeholder="e. g. 512"
                            value={formValues.width}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className={styles.optionsItem}>
                          <div className={styles.category}>Height</div>
                          <TextInput
                            className={styles.field}
                            name="height"
                            type="number"
                            placeholder="e. g. 512"
                            value={formValues.height}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className={styles.item}>
                      <div className={styles.optionsList} style={{alignItems: 'end'}}>
                        <div className={styles.optionsItem}>
                          <div className={styles.category}>Image Max Size</div>
                          <TextInput
                            className={styles.field}
                            name="im_max_size"
                            type="number"
                            placeholder="e. g. 600"
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
                            <span>Upscale</span>
                          </div>

                          {formValues.upscale && (
                            <select name="upscale_type" value={formValues.upscale_type} onChange={handleInputChange} className={styles.formControlSelect}>
                              <option value="default">default</option>
                              <option value="art">art</option>
                              <option value="comics">comics</option>
                              <option value="anime">anime</option>
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
                      <strong>Server is currently busy. Please try creation a little later.</strong>
                    </p>
                  )}

                  <p>
                    <button type="submit" className={cn(`button ${formSubmitted ? 'loading' : ''}`, styles.buttonBig)}>
                      {formSubmitted && <Loader className={styles.loader} color="white" />}
                      Create
                    </button>
                  </p>
                  <p>Note: by using this image creator, you agree to abide by our <a href="#">terms of service</a></p>
                </div>
              </form>
            </>
          )}

          {Object.keys(apiStatusResponse).length > 0 && (
            <>
              <div className={styles.top}>
                <h1 className={cn("h2", styles.heading)}>
                  Your Amazing Resulting Image
                </h1>

                {apiStatusResponse.status === 'process' && (
                  <div className={cn("h3", styles.heading)}>
                    In progress - {apiStatusResponse.img}
                  </div>
                )}

                {(apiStatusResponse.status !== 'process' && apiStatusResponse.status !== 'ready' && apiStatusResponse.status !== 'upscale failed') && (
                  <div className={cn("h3", styles.heading)}>
                    Finishing...
                  </div>
                )}

                {apiStatusResponse.status === 'upscale failed' && (
                  <div className={cn("h3", styles.heading)}>
                    Oops, something went wrong.<br/>
                    Please try creating another image.
                  </div>
                )}
              </div>

              {apiStatusResponse.status === 'ready' && (
                <>
                  <p className={styles.imageResult}>
                    <img src={`data:image/png;base64,${apiStatusResponse.img}`} alt="Resulting Image" />
                  </p>

                  <p>&nbsp;</p>
                </>
              )}

              {(apiStatusResponse.status === 'ready' || apiStatusResponse.status === 'upscale failed') && (
                <>
                  <p>
                    <button type="button" className={cn('button', styles.buttonBig)} onClick={handleNewImageClick}>
                      Create another one
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
