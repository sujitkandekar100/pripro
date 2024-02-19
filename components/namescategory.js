import styles from "./namescategory.module.css";

const Namescategory = ({ blogCategory }) => {
  return (
    <div className={styles.names}>
      <div className={styles.all}>
        <div className={styles.foundersDiary}>{blogCategory}</div>
      </div>
      <div className={styles.design}>
        <div className={styles.foundersDiary}>Design</div>
      </div>
      <div className={styles.design}>
        <div className={styles.foundersDiary}>Code</div>
      </div>
      <div className={styles.design}>
        <div className={styles.foundersDiary}>Integrations</div>
      </div>
      <div className={styles.design}>
        <div className={styles.foundersDiary}>Founder’s diary</div>
      </div>
      <div className={styles.designtocode}>
        <div className={styles.foundersDiary}>Design to code</div>
      </div>
    </div>
  );
};

export default Namescategory;
