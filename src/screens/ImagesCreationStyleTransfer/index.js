import React, { useState } from "react";
import cn from "classnames";
import styles from "./ImagesCreationStyleTransfer.module.sass";
import Switch from "../../components/Switch";
import Icon from "../../components/Icon";
import { getTrackBackground, Range } from "react-range";

const ImagesCreationStyleTransfer = () => {
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
              <div className={styles.category}>Input Image</div>
              <div className={styles.itemHeader}>
                <div className={styles.note}>
                  Choose an image to apply styles to
                </div>

                {isAdvancedEnabled && (
                  <div className={styles.switchControl}>
                    <Switch value={isMultipleInputs} setValue={setIsMultipleInputs} />
                    <span>Try multiple inputs</span>
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
              <div className={styles.category}>Style Image</div>
              <div className={styles.itemHeader}>
                <div className={styles.note}>
                  Choose a style to apply to your input
                </div>

                {isAdvancedEnabled && (
                  <div className={styles.switchControl}>
                    <Switch value={isMultipleInputs} setValue={setIsMultipleInputs} />
                    <span>Try multiple inputs</span>
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
                  <div className={styles.category}>Blend With Another Style?</div>
                  <p className={styles.note}>
                    Optional. Useful for mixing styles, or using masks to apply different styles to different parts of the image. Styles you add this way will be used together in the same creation.
                  </p>
                  <p>
                    <button className={cn("button")}>
                      Add style
                    </button>
                  </p>
                </div>

                <div className={styles.item}>
                  <div className={styles.category}>Creation Settings</div>
                  <p className={styles.note}>
                    These options affect the creation as a whole.
                  </p>
                  <div className={styles.optionsList}>
                    <div className={styles.optionsItem}>
                      <div><strong>Color</strong></div>
                      <div className={styles.switchControl}>
                        <Switch value={isVideoChosen} setValue={setIsVideoChosen} />
                        <span>Use colors from input image</span>
                      </div>
                    </div>

                    <div className={styles.optionsItem}>
                      <div><strong>Sharpen</strong></div>
                      <div className={styles.switchControl}>
                        <Switch value={isVideoChosen} setValue={setIsVideoChosen} />
                        <span>Reduce bluriness by running the algorithm for longer</span>
                      </div>
                    </div>

                    <div className={styles.optionsItem}>
                      <div><strong>Content Weight</strong></div>
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
                      <p>How much should the output look like the input image?</p>
                    </div>

                    <div className={styles.optionsItem}>
                      <div><strong>Content Weight</strong></div>
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
                      <p>How much should the output look like the input image?</p>
                    </div>

                    <div className={styles.optionsItem}>
                      <div><strong>Content Weight</strong></div>
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
                      <p>How much should the output look like the input image?</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className={styles.item}>
              <div className={styles.category}>Video</div>
              <p className={styles.note}>
                Get a short video of the creation process
              </p>
              <div className={styles.switchControl}>
                <Switch value={isVideoChosen} setValue={setIsVideoChosen} />
                <span>Get a 10-20 second video of your creation being generated for 2 extra credits</span>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.category}>Resolution</div>
              <p className={styles.note}>
                Choose an output size - higher resolution gives better results
              </p>
            </div>

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

export default ImagesCreationStyleTransfer;
