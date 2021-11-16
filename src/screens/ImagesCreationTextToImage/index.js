import React, { useState } from "react";
import cn from "classnames";
import styles from "./ImagesCreationTextToImage.module.sass";
import Switch from "../../components/Switch";
import Icon from "../../components/Icon";
import { getTrackBackground, Range } from "react-range";
import TextInput from "../../components/TextInput";

const ImagesCreationTextToImage = () => {
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
              Create Something Amazing
            </h1>
            <div className={styles.switchControl}>
              <Switch value={isAdvancedEnabled} setValue={setIsAdvancedEnabled} />
              <span>Show advanced options</span>
            </div>
          </div>

          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.category}>Text Prompt</div>
              <p className={styles.note}>
                Write a prompt for the AI to work from
              </p>
              <TextInput
                className={styles.field}
                label="Your text prompt"
                name="Text"
                type="text"
                placeholder="e. g. Crazy fox jumps over a lazy dog"
                required
              />
            </div>

            {isAdvancedEnabled && (
              <div className={styles.item}>
                <div className={styles.category}>Advanced</div>
                <p className={styles.note}>
                  Optional settings you might want to tweak
                </p>

                <div><strong>Start Image</strong></div>
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
            )}

            <div className={styles.item}>
              <p>
                <button className={cn("button", styles.buttonBig)}>
                  Create (1 Credit)
                </button>
              </p>
              <p>Note: by using this image creator, you agree to abide by our <a href="#">terms of service</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImagesCreationTextToImage;
