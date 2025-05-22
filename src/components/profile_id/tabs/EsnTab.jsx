import { useTranslation } from "react-i18next";
import ProfileIdImage from "../../../assets/profile_id_image.png";

export default function ProfileIdTab() {
  const { t } = useTranslation();

  return (
    <div className="profile-id-tab">
      <div className="profile-id-tab__left">
        <p style={{ fontSize: 38 }}>🧠</p>
        <p className="profile-id-tab__left-title">Enterprise Social Network</p>
        <p
          style={{ marginTop: 16, maxWidth: "90%" }}
          className="profile-id-tab__left-description"
        >
          {t("esn_description_1")}
        </p>
        <ul style={{ marginTop: 16, maxWidth: "90%" }}>
          <li>{t("esn_description_2")}</li>
          <li>{t("esn_description_3")}</li>
          <li>{t("esn_description_4")}</li>
          <li>{t("esn_description_5")}</li>
          <li>{t("esn_description_6")}</li>
          <li>{t("esn_description_7")}</li>
        </ul>
      </div>

      <div className="profile-id-tab__right">
        <img src={ProfileIdImage} />
      </div>
    </div>
  );
}
