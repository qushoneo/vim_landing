import Logo from "../assets/logo_white.svg";
import XLogo from "../assets/x_logo.svg";
import InstagramLogo from "../assets/instagram_logo.svg";
import YoutubeLogo from "../assets/logo_yt.svg";
import LinkedinLogo from "../assets/linkedin_logo.svg";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <img src={Logo} alt="logo" />

          <div className="footer-col-links">
            <a href="https://x.com/vimglobal">
              <img src={XLogo} />
            </a>
            <a href="https://www.instagram.com/forum.boost/">
              <img src={InstagramLogo} />
            </a>
            <a href="https://www.youtube.com/@BOOSTFORUM">
              <img src={YoutubeLogo} />
            </a>
            <a href="https://www.linkedin.com/company/vimcompany/">
              <img src={LinkedinLogo} />
            </a>
          </div>
        </div>
        <div className="footer-col">
          <p className="footer-col-title">Vim Global</p>

          <div className="footer-col-content">
            <p>Vim Profile ID</p>
            <p>Vim Business ID</p>
            <p>Vim Enterprise Social Network</p>
          </div>
        </div>
        <div className="footer-col">
          <p className="footer-col-title">{t("footer_col_3")}</p>

          <div className="footer-col-content">
            <a href="#for_whom_anchor">
              <p>{t("reason_title")}</p>
            </a>
            <a href="#hint_anchor">
              <p>{t("who_is_customer_title")}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
