import { useTranslation } from "react-i18next";
import logo from "../assets/logo.svg";
import Button from "./Button";
import LanguageSelect from "./LanguageSelect";
import MenuIcon from "../assets/burger.svg";
import CloseIcon from "../assets/cross.svg";
import { useState, useRef, useEffect } from "react";
import ClickOutsideListener from "./ClickOutsideListener";
import gsap from "gsap";

export default function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef(null);

  const pages = [
    {
      name: "Vim Global",
      path: "#vim_anchor",
    },
    {
      name: t("hint"),
      path: "#hint_anchor",
    },
    {
      name: t("for_whom"),
      path: "#for_whom_anchor",
    },
  ];

  useEffect(() => {
    if (menuRef.current) {
      if (isMenuOpen) {
        setIsVisible(true);
        gsap.fromTo(
          menuRef.current,
          {
            x: "100%",
            opacity: 0,
          },
          {
            x: "0%",
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          }
        );
      } else {
        gsap.to(menuRef.current, {
          x: "100%",
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => setIsVisible(false),
        });
      }
    }
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="logo" />

        <div className="header-right">
          <div className="header-right-pages mobile-hidden">
            {pages.map((page) => (
              <a href={page.path} key={page.name}>
                {page.name}
              </a>
            ))}
          </div>

          <LanguageSelect className="mobile-hidden" />

          <div className="header-right-buttons mobile-hidden">
            <Button text={t("login")} variant="primary" size="large" />
            <Button text={t("signup")} variant="red" size="large" />
          </div>

          <img
            src={isMenuOpen ? CloseIcon : MenuIcon}
            alt="menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="desktop-hidden"
          />

          <ClickOutsideListener onClickOutside={() => setIsMenuOpen(false)}>
            <div
              ref={menuRef}
              className="header__dropdown-menu desktop-hidden"
              style={{
                display: isVisible ? "block" : "none",
              }}
            >
              <div className="header__dropdown-menu-item">
                <div className="header__dropdown-menu-item-title">
                  <div>
                    <p className="main">VIM.MAX</p>
                    <p className="subtitle">by vim.marketing</p>
                  </div>

                  <LanguageSelect />
                </div>
                <div className="header__dropdown-menu-item-pages">
                  {pages.map((page) => (
                    <a href={page.path} key={page.name}>
                      {page.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="header-right-buttons">
                <Button
                  onClick={() => {
                    window.location.href =
                      "https://vimapp.vim.global:4443/login";
                  }}
                  text={t("login")}
                  variant="primary"
                  size="large"
                />
                <Button
                  onClick={() => {
                    window.location.href =
                      "https://vimapp.vim.global:4443/auth";
                  }}
                  text={t("signup")}
                  variant="red"
                  size="large"
                />
              </div>
            </div>
          </ClickOutsideListener>
        </div>
      </div>
    </header>
  );
}
