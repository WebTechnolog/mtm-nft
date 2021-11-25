import React from "react";
import TextInput from "../../components/TextInput";
import styles from "./ComingSoon.module.sass";
import cn from "classnames";

const ComingSoon = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/images/logo.svg" alt="Meta Talent Market" />
      <form name="launch-newsletter" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="launch-newsletter" />
        <p>Please send us your email to be notified on project launch</p>
        <p>
          <TextInput
            name="email"
            type="email"
            placeholder="Your email"
            required
          />
        </p>
        <button type="submit" className={cn('button', styles.buttonBig)}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ComingSoon;
