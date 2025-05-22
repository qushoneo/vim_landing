import { useTranslation } from "react-i18next";
import ProfileIdImage from "../../../assets/profile_id_image.png";

export default function ProfileIdTab() {
  const { t } = useTranslation();

  return (
    <div className="profile-id-tab">
      <div className="profile-id-tab__left">
        <p style={{ fontSize: 58 }}>🏢</p>
        <p className="profile-id-tab__left-title">Vim Business ID</p>

        <p
          style={{ width: "55%" }}
          className="profile-id-tab__left-description"
        >
          {t("business_id_description")}
        </p>
      </div>

      <div className="profile-id-tab__right">
        <img src={ProfileIdImage} />
      </div>
    </div>
  );
}
