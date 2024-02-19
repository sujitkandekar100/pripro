import TryforFree from "./tryfor-free";
import styles from "./top-header.module.css";

const TopHeader = ({ onLocofyGuieLogoImageClick }) => {
  return (
    <header className={styles.topHeader}>
      <img
        className={styles.locofyGuieLogoIcon}
        alt=""
        src="/locofyguielogo.svg"
        onClick={onLocofyGuieLogoImageClick}
      />
      <div className={styles.headerLinks}>
        <a className={styles.locofyHomeLink}>
          <img className={styles.homeIcon} alt="" src="/home-icon@2x.png" />
          <div className={styles.locofyHome}>Locofy Home</div>
        </a>
        <TryforFree
          tryforFreeWidth="182px"
          tryforFreePadding="var(--padding-2xs) var(--padding-xl)"
        />
      </div>
    </header>
  );
};

export default TopHeader;
