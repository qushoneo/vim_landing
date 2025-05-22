import "./style.scss";
import "./components/mobile.scss";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import Init from "./components/Init";
import ProfileId from "./components/profile_id/ProfileId";
import WhatInside from "./components/WhatInside";
import WhoIsCustomer from "./components/WhoIsCustomer";
import Reason from "./components/Reason";
import Reviews from "./components/Reviews";
import WarsawExpo from "./components/WarsawExpo";
import Footer from "./components/Footer";
import { useState } from "react";
import KeyIcon from "./assets/key.png";
import OfficeIcon from "./assets/office.png";
import BrainIcon from "./assets/brain.png";
import ProfileIdTab from "./components/profile_id/tabs/ProfileIdTab";
import BusinessIdTab from "./components/profile_id/tabs/BusinessIdTab";
import EsnTab from "./components/profile_id/tabs/EsnTab";

function App() {
  const { t } = useTranslation();
  // sorry for code in this project, 1 day deadline....... xD

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

  return (
    <div className="app">
      <Header />

      <main>
        <Init />

        <ProfileId tab={tab} setTab={setTab} tabs={tabs} />

        <WhatInside />

        <WhoIsCustomer />

        <Reason />

        <Reviews />

        <WarsawExpo />
      </main>

      <Footer setTab={setTab} tabs={tabs} />
    </div>
  );
}

export default App;
