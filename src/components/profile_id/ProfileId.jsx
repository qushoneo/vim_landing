import { useTranslation } from "react-i18next";
import rocket from "../../assets/rocket.png";
import { useState, useRef, useEffect } from "react";
import KeyIcon from "../../assets/key.png";
import OfficeIcon from "../../assets/office.png";
import BrainIcon from "../../assets/brain.png";
import ProfileIdTab from "./tabs/ProfileIdTab";
import BusinessIdTab from "./tabs/BusinessIdTab";
import EsnTab from "./tabs/EsnTab";
import gsap from "gsap";

export default function ProfileId() {
  const { t } = useTranslation();
  const tabContentRef = useRef(null);

  const tabs = [
    {
      id: "vim-profile-id",
      name: t("vim_profile_id"),
      icon: KeyIcon,
      paddingLeft: 0,
      component: <ProfileIdTab />,
    },
    {
      id: "vim-business-id",
      name: t("vim_business_id"),
      icon: OfficeIcon,
      component: <BusinessIdTab />,
    },
    {
      id: "vim-ESN",
      name: t("vim_ESN"),
      icon: BrainIcon,
      component: <EsnTab />,
    },
  ];

  const [tab, setTab] = useState(tabs[0]);

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
