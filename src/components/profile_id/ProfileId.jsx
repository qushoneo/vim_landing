import { useTranslation } from "react-i18next";
import { useRef } from "react";

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
          <p style={{ fontSize: 58 }}>🚀</p>
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
              <p style={{ fontSize: 12 }}>{_tab.icon}</p>
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
