import styles from "./guest-author.module.css";

const GuestAuthor = () => {
  return (
    <div className={styles.guestAuthor}>
      <div className={styles.guestAuthorEntry}>Guest Author Entry</div>
      <a className={styles.guestarea}>
        <div className={styles.image1}>
          <img className={styles.image34Icon} alt="" src="/image-34@2x.png" />
        </div>
        <div className={styles.guesttextarea}>
          <div className={styles.guesttext}>
            <div className={styles.guestheader}>
              <div className={styles.names}>
                <div className={styles.locofyEvents}>Locofy Events</div>
                <div className={styles.time}>
                  <div className={styles.minRead}>5 min read</div>
                </div>
              </div>
              <a className={styles.buildFasterLike}>
                Build faster like a loco - Locofy Hackathon 2022
              </a>
            </div>
            <div className={styles.guestdescription}>
              <div
                className={styles.moreThan100}
              >{`More than 100 users have participated in the recently concluded Locofy Hackathon. `}</div>
            </div>
          </div>
          <div className={styles.guesttextareaChild} />
          <div className={styles.articleAuthor}>
            <div className={styles.postedByJustinContainer}>
              <span>Posted by</span>
              <span className={styles.justinBenito}> Justin Benito</span>
            </div>
            <div className={styles.postedOnSep}>Posted on Sep 4, 2022</div>
          </div>
          <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
        </div>
      </a>
    </div>
  );
};

export default GuestAuthor;
