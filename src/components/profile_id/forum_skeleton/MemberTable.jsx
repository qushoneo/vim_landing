import React from "react";
import { useTranslation } from "react-i18next";
import { useLayoutEffect, useRef, useState } from "react";
import "./skeleton.scss";
import VimLogo from "../../../assets/logo.svg";
import Button from "../../Button";
import BoostForumLogo from "../../../assets/boost_forum.svg";
import avatar from "../../../assets/images/skeleton_user.png";
const HEADER_HEIGHT = 54;
const ROW_HEIGHT = 206; // Mobile height
const ROW_HEIGHT_DESKTOP = 64; // Desktop height
import arrowLeft from "../../../assets/arrow_left.svg?react";

export const MembersTableSkeleton = () => {
  const { t } = useTranslation();
  const isMobile = document.documentElement.clientWidth < 768;
  const tableRef = useRef(null);
  const [rowsCount, setRowsCount] = useState(5);

  useLayoutEffect(() => {
    if (tableRef.current) {
      const tableHeight = tableRef.current.clientHeight;
      const availableHeight = tableHeight - HEADER_HEIGHT;
      const rowHeight = isMobile ? ROW_HEIGHT : ROW_HEIGHT_DESKTOP;
      const rows = Math.floor(availableHeight / rowHeight);
      setRowsCount(Math.max(1, rows));
    }
  }, [isMobile]);

  if (isMobile) {
    headerFields = [{ key: "memberFullName", width: "30%" }];
  }

  const names = [
    "Мария",
    "Дмитрий",
    "Екатерина",
    "Татьяна",
    "Александр",
    "Сергей",
    "Анна",
    "Ольга",
    "Николай",
    "Иван",
    "Елена",
    "Андрей",
    "Максим",
  ];

  const maleNames = [
    "Александр",
    "Дмитрий",
    "Евгений",
    "Иван",
    "Кирилл",
    "Максим",
    "Николай",
    "Олег",
    "Павел",
    "Роман",
    "Сергей",
    "Тимур",
  ];

  const randomName = () => {
    return maleNames[Math.floor(Math.random() * maleNames.length)];
  };

  return (
    <div className="members-table-skeleton">
      <header className="members-table-skeleton__header">
        <div className="members-table-skeleton__header-logo-container">
          <img src={VimLogo} />
          <div className="logo-text-container">
            <p className="main">VIM.MAX</p>
            <p className="subtitle">by vim.marketing</p>
          </div>
        </div>

        <div className="members-table-skeleton__header-buttons-container">
          <Button
            text={t("login")}
            variant="primary"
            size="small"
            style={{ width: "100%", borderRadius: 8 }}
            onClick={() => {
              window.location.href = "https://vimapp.vim.global:4443/login";
            }}
          />

          <Button
            text={t("register")}
            variant="secondary"
            size="small"
            style={{ width: "100%", borderRadius: 8 }}
            onClick={() => {
              window.location.href = "https://vimapp.vim.global:4443/auth";
            }}
          />
        </div>
      </header>

      <div className="members-table-skeleton__subtitle-container">
        <img src={BoostForumLogo} /> <p>{t("sign_up_forum")}</p>
      </div>

      <div ref={tableRef} className="members-table-skeleton__table-container">
        <div className="members-table-skeleton__table-container-header">
          {["member", "about", "contacts", "vim_profile"].map((row, index) => (
            <div
              key={index}
              className={`members-table-skeleton__table-container-header-item item-${row}`}
            >
              <p>{t(`forum_table.${row}`)}</p>
            </div>
          ))}
        </div>

        <div className="members-table-skeleton__table-container-body">
          {Array.from({ length: rowsCount }).map((_, index) => {
            let avatar = new URL(
              `./avatars/avatar_${index + 1}.png`,
              import.meta.url
            ).href;

            // real human
            if (index >= 10) {
              avatar = `https://randomuser.me/api/portraits/men/${
                (index % 100) + 1
              }.jpg`;
            }
            return (
              <div
                key={index}
                className="members-table-skeleton__table-container-body-row"
                style={{
                  height: isMobile ? ROW_HEIGHT : ROW_HEIGHT_DESKTOP,
                }}
              >
                <div
                  className="members-table-skeleton__table-container-body-row-item-avatar"
                  style={{
                    minWidth: "25%",
                    width: "25%",
                    maxWidth: "25%",
                  }}
                >
                  <img src={avatar} />
                  <p>{names?.[index] || randomName()}</p>
                </div>
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="members-table-skeleton__table-container-body-row-item "
                    style={{
                      display: "flex",
                      alignItems: "center",
                      minWidth: "25%",
                      width: "25%",
                      maxWidth: "25%",
                      height: "24px",
                    }}
                  >
                    <div className="members-table-skeleton__row-skeleton" />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <div className="members-table-skeleton__footer">
        <p className="members-table-skeleton__footer-prev">
          <img src={arrowLeft} />
          {t("prev")}
        </p>
        {["1", "2", "3", "...", "67", "68"].map((item, index) => (
          <p
            key={index}
            className={`members-table-skeleton__footer-page ${
              index === 0 ? "active" : ""
            }`}
          >
            {item}
          </p>
        ))}
        <p className="members-table-skeleton__footer-next">
          {t("next")}
          <img src={arrowLeft} style={{ transform: "rotate(180deg)" }} />
        </p>
      </div>
    </div>
  );
};
