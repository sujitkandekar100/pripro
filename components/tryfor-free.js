import { useMemo } from "react";
import styles from "./tryfor-free.module.css";

const TryforFree = ({ tryforFreeWidth, tryforFreePadding }) => {
  const tryforFreeStyle = useMemo(() => {
    return {
      width: tryforFreeWidth,
      padding: tryforFreePadding,
    };
  }, [tryforFreeWidth, tryforFreePadding]);

  return (
    <a className={styles.tryforFree} style={tryforFreeStyle}>
      <div className={styles.signUpParent}>
        <div className={styles.signUp}>Sign up</div>
        <div className={styles.freeBeta}>FREE Beta</div>
      </div>
    </a>
  );
};

export default TryforFree;
