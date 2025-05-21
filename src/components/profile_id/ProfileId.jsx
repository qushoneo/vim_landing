import { useTranslation } from "react-i18next";
import rocket from "../../assets/rocket.png";
import { useState, useRef, useEffect } from "react";

import gsap from "gsap";

export default function ProfileId({ tab, setTab, tabs }) {
  const { t } = useTranslation();
  const tabContentRef = useRef(null);

  const handleTabChange = (newTab) => {
    if (tabContentRef.current) {
      gsap.to(tabContentRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.1,
        onComplete: () => {
          setTab(newTab);
          gsap.to(tabContentRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.1,
          });
        },
      });
    } else {
      setTab(newTab);
    }
  };

  return (
    <div className="profile-id" id="vim_anchor">
      <div className="profile-id-container">
        <div className="profile-id-container-left">
          <img s src={rocket} />
        </div>
        <div className="profile-id-container_inner">
          <p className="profile-id-container-title">{t("social_network")}</p>
          <p className="profile-id-container-description">{t("all_in_one")}</p>
        </div>
        <div className="profile-id-container-tabs ">
          {tabs.map((_tab) => (
            <div
              className={`profile-id-container-tab ${
                tab.id === _tab.id ? "active" : ""
              }`}
              key={_tab.id}
              onClick={() => handleTabChange(_tab)}
            >
              <img src={_tab.icon} />
              <p>{_tab.name}</p>
            </div>
          ))}
        </div>

        <div style={{ width: "100%" }} ref={tabContentRef}>
          {tab.component}
        </div>
      </div>
    </div>
  );
}
