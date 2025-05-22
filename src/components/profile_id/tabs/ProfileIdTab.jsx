import { useTranslation } from "react-i18next";
import ProfileIdImage from "../../../assets/profile_id_image.png";

export default function ProfileIdTab() {
  const { t } = useTranslation();

  return (
    <div className="profile-id-tab">
      <div className="profile-id-tab__left">
        <p style={{ fontSize: 38 }}>🔑</p>
        <p className="profile-id-tab__left-title">Vim Profile ID</p>

        <p className="profile-id-tab__left-description">
          {t("profile_id_description")}
        </p>

        <p className="profile-id-tab__left-description">
          {t("profile_id_description_2")}
        </p>
      </div>

      <div className="profile-id-tab__right">
        <img src={ProfileIdImage} />
      </div>
    </div>
  );
}
