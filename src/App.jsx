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
function App() {
  const { t } = useTranslation();

  return (
    <div className="app">
      <Header />

      <main>
        <Init />

        <ProfileId />

        <WhatInside />

        <WhoIsCustomer />

        <Reason />

        <Reviews />

        <WarsawExpo />
      </main>

      <Footer />
    </div>
  );
}

export default App;
