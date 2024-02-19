import styles from "./c-t-a1.module.css";

const CTA1 = () => {
  return (
    <div className={styles.cta}>
      <div className={styles.call}>
        <div className={styles.calltext}>
          <b className={styles.keepYourLoco}>Keep your loco mode on!</b>
          <div className={styles.stayUpdatedOn}>
            Stay updated on the latest Locofy announcements and product updates
          </div>
        </div>
        <div className={styles.sticker}>
          <div className={styles.stickerInner}>
            <div className={styles.stickerInner}>
              <img className={styles.ovalIcon} alt="" src="/oval.svg" />
              <img
                className={styles.groupChild}
                alt=""
                src="/group-7111@2x.png"
              />
            </div>
          </div>
          <img
            className={styles.stickerChild}
            alt=""
            src="/group-74171@2x.png"
          />
        </div>
      </div>
      <div className={styles.action}>
        <input
          className={styles.input}
          placeholder="Enter email address"
          type="text"
        />
        <a className={styles.getPluginButton}>
          <div className={styles.subscribe}>Subscribe</div>
        </a>
      </div>
    </div>
  );
};

export default CTA1;
