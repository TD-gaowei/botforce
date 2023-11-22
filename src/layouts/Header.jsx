import styles from "./index.module.css";

import Profile from "../assets/profile.png";
import notification from "../assets/notification.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          className="react-box_1-2-3_co-box"
          data-co-name="Box"
          data-co-version="1.2.3"
          data-co-project="cobalt"
          style={{ width: "28px", height: "28px", marginRight: "8px" }}
        >
          <img
            className="react-image_1-1-6_co-image"
            src="https://prd-cdn-talkdesk.talkdesk.com/cdn-assets/latest/talkdesk/brand/main_brand/icon/talkdesk_icon_white.svg"
            alt="Talkdesk"
            width="28"
            height="28"
            data-co-name="Image"
            data-co-version="1.1.6"
            data-co-project="cobalt"
          />
        </div>
        <img
          src={notification}
          alt={"notification"}
          className={styles.notification}
        />
      </div>

      <img src={Profile} className={styles.profile} />
    </header>
  );
};

export default Header;
