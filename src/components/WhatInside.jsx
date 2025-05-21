import BoostAsset from "../assets/boost_asset.png";
import { useTranslation } from "react-i18next";

export default function WhatInside() {
  const { t } = useTranslation();
  return (
    <div className="what-inside">
      <div className="what-inside-container">
        <img style={{ width: 520, height: 339 }} src={BoostAsset} />

        <div className="what-inside-container-right">
          <p className="what-inside-container-right-title">
            {t("what_inside_title")}
          </p>
          <ul>
            <li>{t("what_inside_1")}</li>
            <li>{t("what_inside_2")}</li>
            <li>{t("what_inside_3")}</li>
            <li>{t("what_inside_4")}</li>
            <li>{t("what_inside_5")}</li>
            <li>{t("what_inside_6")}</li>
            <li>{t("what_inside_7")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
