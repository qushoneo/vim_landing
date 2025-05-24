import Logo from "../assets/logo_white.svg";
import XLogo from "../assets/x_logo.svg";
import InstagramLogo from "../assets/instagram_logo.svg";
import YoutubeLogo from "../assets/logo_yt.svg";
import LinkedinLogo from "../assets/linkedin_logo.svg";
import TelegramLogo from "../assets/telegram_logo.svg";
import FacebookLogo from "../assets/facebook_logo.svg";

import { useTranslation } from "react-i18next";

export default function Footer({ setTab, tabs }) {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <img src={Logo} alt="logo" />

          <div className="footer-col-links">
            {/* <a target="_blank" href="https://x.com/vimglobal">
              <img src={XLogo} />
            </a> */}
            <a target="_blank" href="https://www.instagram.com/vim.global_">
              <img src={InstagramLogo} />
            </a>
            <a target="_blank" href="https://t.me/nfc_vim">
              <img src={TelegramLogo} />
            </a>
            <a target="_blank" href="https://www.youtube.com/@VIMCompany-r8d">
              <img src={YoutubeLogo} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/vimcompany/"
            >
              <img src={LinkedinLogo} />
            </a>
            <a target="_blank" href="https://www.facebook.com/vinglobalESN">
              <img src={FacebookLogo} />
            </a>
          </div>
        </div>
        <div className="footer-col">
          <p className="footer-col-title">Vim Global</p>

          <a href="#vim_anchor">
            <div className="footer-col-content">
              <p>
                <a href="#vim_anchor">{t("about_vim.title")}</a>
              </p>

              <p onClick={() => setTab(tabs[0])}>Vim Profile ID</p>
              <p onClick={() => setTab(tabs[1])}>Vim Business ID</p>
              <p onClick={() => setTab(tabs[2])}>
                Vim Enterprise Social Network
              </p>
            </div>
          </a>
        </div>
        <div className="footer-col">
          <div className="footer-col-content">
            <a href="#for_whom_anchor" style={{ marginTop: 20 }}>
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
